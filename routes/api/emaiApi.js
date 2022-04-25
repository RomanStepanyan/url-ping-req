const express = require("express");
const router = express.Router();

const { listEmail, addEmail, updateEmail } = require("../../model/email.js");

router.get("/", async (req, res, next) => {
  try {
    const data = await listEmail();
    res.status(200);
    res.json({ data });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newURL = await addEmail(req.body);
    res.status(200);
    res.json({ "email added": newURL });
  } catch (error) {
    next(error);
  }
});

router.patch("/", async (req, res, next) => {
  try {
    const data = await updateEmail(req.body);
    if (!data) {
      res.status(404);
      res.json({
        message: `Email is not found`,
      });
    }
    res.status(200);
    res.json({ "Email updated": data });
  } catch (error) {
    next({ message: "Email not found" });
  }
});

module.exports = router;
