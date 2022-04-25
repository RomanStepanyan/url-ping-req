const express = require("express");
const router = express.Router();
const axios = require("axios").default;

const mailer = require("../../nodemailer/nodemailer");

const { urlListForPing } = require("../../model/ping");
const { addLog } = require("../../model/log");
const { listEmail } = require("../../model/email");

router.get("/", async (req, res, next) => {
  try {
    const data = await urlListForPing();
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
      });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
