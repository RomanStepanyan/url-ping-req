const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  pool: true,
  host: "smtp.ethereal.email",
  secure: false, // true for 465, false for other ports
  port: 587,
  auth: {
    user: "quincy.carroll10@ethereal.email",
    pass: "cApEcVVJQ41s9HsRw2",
  },
});

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log("email sent: ", info);
  });
};

module.exports = mailer;
