const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');



const auth = {
    auth: {
        api_key:"c60d30144b0e794d8032cb413fbb2e1f-4b1aa784-04aa3fb7",
        domain: "sandbox218445b6b72f48a380ccd65b035d0a2a.mailgun.org"
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
