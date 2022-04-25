const { URL } = require("../db/urlModel");

const listURL = async () => {
  try {
    const urlList = await URL.find();
    return urlList;
  } catch (error) {}
};

const removeUrl = async (urlId) => {
  try {
    const removingUrl = await URL.findByIdAndRemove(urlId);
    return removingUrl;
  } catch (error) {}
};

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

module.exports = {
  listURL,
  removeUrl,
  addURL,
};
