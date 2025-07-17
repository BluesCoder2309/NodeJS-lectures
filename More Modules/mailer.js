// 1 Import nodemailer
const nodemailer = require("nodemailer");

//2. Configure email to send. Now emails are going to be asynchronous op. so async/await
async function sendMail() {
  // 1. Create an email transporter
  //SMTP (Simple Mail Transfer protocol)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mailutkarsh96@gmail.com",
      pass: "ejnconrmedutbfcg ",
    },
  });

  // 2. Configure Email content
  const mailOptions = {
    from: "mailutkarsh96@gmail.com",
    to: "singh.utkarsh2022@gmail.com",
    subject: "Welcome to NodeJS mail app",
    text: "This is a new email using nodemailer in NodeJS",
  };

  // 3. Send the mail
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (err) {
    console.log("Email send failed because of error: " + err);
  }
}

sendMail();