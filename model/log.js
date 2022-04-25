const { Log } = require("../db/logModel");

const listLog = async () => {
  try {
    const logList = await Log.find();
    return logList;
  } catch (error) {}
};

const removeLog = async (logId) => {
  try {
    const removingLog = await Log.findByIdAndRemove(logId);
    return removingLog;
  } catch (error) {}
};

const addLog = async (service_URL, ping_timestamp, HTTP_status) => {
  try {
    const newLog = new Log({ service_URL, ping_timestamp, HTTP_status });
    console.log(newLog);
    await newLog.save();
    return newLog;
  } catch (error) {}
};

module.exports = {
  listLog,
  removeLog,
  addLog,
};
