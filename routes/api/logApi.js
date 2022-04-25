const express = require("express");
const router = express.Router();

const { listLog, addLog, removeLog } = require("../../model/log.js");

router.get("/", async (req, res, next) => {
  try {
    const data = await listLog();
    res.status(200);
    res.json({ data });
    console.log(data);
    return data;
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newLog = await addLog(req.body);
    res.status(200);
    res.json({ "log added": newLog });
  } catch (error) {
    next(error);
  }
});

router.delete("/:logId", async (req, res, next) => {
  try {
    const removedLog = await removeLog(req.params.logId);
    if (!removedLog) {
      res.status(404);
      res.json({
        message: `Contact with id: ${req.params.logId} is not found`,
      });
    }
    res.status(200);
    res.json({ "log deleted": removedLog });
  } catch (error) {
    next({ message: "Not found" });
  }
});

module.exports = router;
