const { Interval } = require("../db/intervalModel");

const getInterval = async () => {
  try {
    const currentInterval = await Interval.find();
    return currentInterval;
  } catch (error) {}
};

const addInterval = async (body) => {
  console.log(body);
  const { interval } = body;
  try {
    const newInterval = new Interval({ interval });
    console.log(newInterval);
    await newInterval.save();
    return newInterval;
  } catch (error) {}
};

const updateInterval = async (body) => {
  try {
    const { interval } = body;
    const updatedInterval = await Interval.findOneAndUpdate({
      $set: { interval },
    });
    return updatedInterval;
  } catch (error) {}
};

module.exports = {
  getInterval,
  addInterval,
  updateInterval,
};
