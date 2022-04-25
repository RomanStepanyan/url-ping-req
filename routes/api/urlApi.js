const express = require("express");
const router = express.Router();
const axios = require("axios").default;

const { listURL, addURL, removeUrl } = require("../../model/url");
const { listEmail } = require("../../model/email");

router.get("/", async (req, res, next) => {
  try {
    const data = await listURL();
    res.status(200);
    res.json({ data });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newURL = await addURL(req.body);
    res.status(201);
    res.json({ "url added": newURL });
  } catch (error) {
    next(error);
  }
});

router.delete("/:urlId", async (req, res, next) => {
  try {
    const removedUrl = await removeUrl(req.params.urlId);
    if (!removedUrl) {
      res.status(404);
      res.json({
        message: `Url with id: ${req.params.urlId} is not found`,
      });
    }
    res.status(200);
    res.json({ "url deleted": removedUrl });
  } catch (error) {
    next({ message: "Not found" });
  }
});

module.exports = router;
