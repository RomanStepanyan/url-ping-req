const { Interval } = require("../db/intervalModel");

const getInterval = async () => {
  try {
    const currentInterval = await Interval.find();
    return currentInterval;
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

const updateInterval = async (intervalId, body) => {
  try {
    const { interval } = body;
    const updatedInterval = await Interval.findByIdAndUpdate(intervalId, {
      $set: { interval },
    });
    return updatedInterval;
  } catch (error) {}
};

module.exports = {
  getInterval,
  // getContactById,
  // removeContact,
  addInterval,
  updateInterval,
  // updateStatusContact,
};
