const express = require("express");
const router = express.Router();
const axios = require("axios").default;

const mailer = require("../../nodemailer/nodemailer");
// const validate = require("./validation.js");

const { listURL, addURL } = require("../../model/url");
const { listLog, addLog } = require("../../model/log");
const { listEmail } = require("../../model/email");

router.get("/", async (req, res, next) => {
  try {
    const data = await listURL();
    const email = await listEmail();
    res.status(200);
    res.json({ data });
    const urlList = [];
    data.map((item) => urlList.push(item.url));
    const getResponse = urlList
      .map((url) => {
        axios.get(url, {
          validateStatus: function (status) {
            addLog(url, new Date(), status);
            if (status >= 400) {
              const message = {
                from: "Mailer test <quincy.carroll10@ethereal.email>",
                to: email,
                subject: "bad log message",
                text: `${url}, ${new Date()},  ${status}`,
              };
              mailer(message);
            }
          },
        });
      })
      .catch(function (error) {
        console.log(error);

        //   .catch(function (error) {
        //     if (error.code === "ENOTFOUND") {
        //       console.log(url, " - response status ", 400);
        //       const status = `url, " - response status ", 400`;
        //       console.log(status);
        //     }
        //   })
        //   .then(function () {
        //     console.log("status from final function", status);
        //   });
      });
  } catch (error) {
    next(error);
  }
});

// router.get("/:contactId", async (req, res, next) => {
//   try {
//     const data = await getContactById(req.params.contactId);
//     if (!data) {
//       res.status(404);
//       res.json({
//         message: `Contact with id: ${req.params.contactId} is not found`,
//       });
//     }
//     res.status(200);
//     res.json({ data });
//   } catch (error) {
//     next(error);
//   }
// });

router.post("/", async (req, res, next) => {
  try {
    const newURL = await addURL(req.body);
    res.status(201);
    res.json({ "url added": newURL });
  } catch (error) {
    next(error);
  }
});

// router.delete("/:contactId", async (req, res, next) => {
//   try {
//     const removedContact = await removeContact(req.params.contactId);
//     if (!removedContact) {
//       res.status(404);
//       res.json({
//         message: `Contact with id: ${req.params.contactId} is not found`,
//       });
//     }
//     res.status(200);
//     res.json({ "contact deleted": removedContact });
//   } catch (error) {
//     next({ message: "Not found" });
//   }
// });

// router.patch("/:contactId", validate.updateContact, async (req, res, next) => {
//   try {
//     const data = await updateContact(req.params.contactId, req.body);
//     if (!data) {
//       res.status(404);
//       res.json({
//         message: `Contact with id: ${req.params.contactId} is not found`,
//       });
//     }
//     res.status(200);
//     res.json({ "contact updated": data });
//   } catch (error) {
//     next({ message: "Not found" });
//   }
// });

module.exports = router;
