const { URL } = require("../db/urlModel");

const urlListForPing = async () => {
  try {
    const urlList = await URL.find();
    return urlList;
  } catch (error) {}
};

module.exports = {
  urlListForPing,
};
