const nodemailer = require('nodemailer');
const nodeMailGun = require('nodemailer-mailgun-transport');
const log = console.log;

const auth = {
    auth: {
        api_key: 'a52fef4fdfc51533cecd4e52ceeddfc1-3e51f8d2-398ed473',
        domain: 'sandbox4b1f56fdd417422d9530ecf18f7209e5.mailgun.org' // TODO:
    }
}

let transporter = nodemailer.createTransport( nodeMailGun(auth));

const mailOptions = {
    from: 'some@some.com',
    to: 'belzeshop@gmail.com',
    subject: 'Welcome to my App',
    text: 'It is working'
}

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});