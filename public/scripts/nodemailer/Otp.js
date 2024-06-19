const nodemailer = require('nodemailer');
require('dotenv').config();

const html = `<h1> hello world</h1>
<p>poof</p>
`;

const NodeEmail = process.env.Email_address;
const NodePass = process.env.App_gmail;
console.log("Email:", NodeEmail);
console.log("Password Length:", NodePass.length);

async function main(){
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: NodeEmail,
          pass: NodePass  
        }
      });

const info = await transporter.sendMail({
    from: NodeEmail ,
    to:'daniel2202556@miuegypt.edu.eg',
    subject: 'Testing',
    html: html,
})
    console.log("Message send:"+ info.messageId);
}

main()
.catch(e=>console.log(e));