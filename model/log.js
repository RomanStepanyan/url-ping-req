const { Log } = require("../db/logModel");

const listLog = async () => {
  try {
    const logList = await Log.find();
    return logList;
  } catch (error) {}
};

// const getContactById = async (contactId) => {
//   try {
//     const contactById = await Contacts.findById(contactId);
//     return contactById;
//   } catch (error) {}
// };

// const removeContact = async (contactId) => {
//   try {
//     const removingContact = await Contacts.findByIdAndRemove(contactId);
//     return removingContact;
//   } catch (error) {}
// };

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
  // getContactById,
  // removeContact,
  addLog,
  // updateContact,
  // updateStatusContact,
};
