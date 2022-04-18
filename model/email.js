const { Email } = require("../db/emailModel");

const listEmail = async () => {
  try {
    const emailList = await Email.find();
    const [{ email }] = emailList;
    return email;
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

const addEmail = async (body) => {
  console.log(body);
  const { email } = body;
  try {
    const newEmail = new Email({ email });
    console.log(newEmail);
    await newEmail.save();
    return newEmail;
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
  listEmail,
  // getContactById,
  // removeContact,
  addEmail,
  // updateContact,
  // updateStatusContact,
};
