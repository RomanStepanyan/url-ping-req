const express = require("express");
const router = express.Router();
// const validate = require("./validation.js");

const { listEmail, addEmail } = require("../../model/email.js");

router.get("/", async (req, res, next) => {
  try {
    const data = await listEmail();
    res.status(200);
    res.json({ data });
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
    const newURL = await addEmail(req.body);
    res.status(200);
    res.json({ "email added": newURL });
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
