const express = require("express");
const router = express.Router();

const {
  getInterval,
  addInterval,
  updateInterval,
} = require("../../model/interval");

router.get("/", async (req, res, next) => {
  try {
    const data = await getInterval();
    res.status(200);
    res.json({ data });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newInterval = await addInterval(req.body);
    res.status(201);
    res.json({ "interval added": newInterval });
  } catch (error) {
    next(error);
  }
});

router.patch("/", async (req, res, next) => {
  try {
    const data = await updateInterval(req.body);
    if (!data) {
      res.status(404);
      res.json({
        message: `Interval is not found`,
      });
    }
    res.status(200);
    res.json({ "Interval updated": data });
  } catch (error) {
    next({ message: "Interval not found" });
  }
});

module.exports = router;
