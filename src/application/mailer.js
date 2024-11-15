const fs = require('fs');
const path = require('path');
const nodeMailer = require('nodemailer');

const sendMail = async (to, subject, htmlFilePath, otp, action) => {
  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD
    }
  });

  let htmlContent = fs.readFileSync(path.resolve(htmlFilePath), 'utf-8');
  htmlContent = htmlContent.replace('{{OTP}}', otp);
  htmlContent = htmlContent.replace('{{ACTION}}', action);

  const mailOptions = {
    from: `PlantPal App <${process.env.SMTP_EMAIL}>`,
    to,
    subject,
    html: htmlContent
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendMail };
