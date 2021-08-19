const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();




const auth = {
    auth: {
        api_key:process.env.API_KEY,
        domain: process.env.DOMAIN
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) =>{
    const mailOptions = {
        from:email,
        to: 'Ademuyiwahassan68@gmail.com',
        subject,
        text
    }

    transporter.sendMail(mailOptions, function(err, data){
        if(cb) {
            cb(err, null);
        }else {
            cb(null, data);
        }
        
    });

   



}


module.exports = sendMail; 
