// Please don't change the pre-written code
// Import the necessary modules here
import nodemailer from "nodemailer";
import readline from "readline";

const Solution = () => {
  // Write your code here

  const qI = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  qI.question("please enter your mail ", async (mail) => {
    qI.close();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "codingninjas2k16@gmail.com",
        pass: "slwvvlczduktvhdj",
      },
    });

    const mailOptions = {
      from: "codingninjas2k16@gmail.com",
      to: mail,
      subject: "Coding Ninjas",
      text: "The world has enough coders; be a coding ninja!",
    };

    // Send mail
    try {
      await transporter.sendMail(mailOptions);
      console.log(`Success: EMail sent to ${mail}`);
    } catch (error) {
      console.log("Email send failed because of error: " + error);
    }
  });
};

export default Solution;
