const { URL } = require("../db/urlModel");

const listURL = async () => {
  try {
    const urlList = await URL.find();
    return urlList;
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

const addURL = async (body) => {
  console.log(body);
  const { url } = body;
  try {
    const newURL = new URL({ url });
    console.log(newURL);
    await newURL.save();
    return newURL;
  } catch (error) {}
};

// const updateContact = async (contactId, body) => {
//   try {
//     const { name, email, phone } = body;
//     const updatedContact = await Contacts.findByIdAndUpdate(contactId, {
//       $set: { name, email, phone },
//     });
//     return updatedContact.id;
//   } catch (error) {}
// };

module.exports = {
  listURL,
  // listEmail,
  // getContactById,
  // removeContact,
  addURL,
  // updateContact,
  // updateStatusContact,
};
