const { Email } = require("../db/emailModel");

const listEmail = async () => {
  try {
    const emailList = await Email.find();
    const [{ email }] = emailList;
    return email;
  } catch (error) {}
};

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

const updateEmail = async (body) => {
  try {
    const { email } = body;
    const onEmailUpdate = await Email.findOneAndUpdate({
      $set: { email },
    });
    return onEmailUpdate;
  } catch (error) {}
};

module.exports = {
  listEmail,
  addEmail,
  updateEmail,
};
