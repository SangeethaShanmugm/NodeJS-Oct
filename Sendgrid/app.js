import * as sgMail from '@sendgrid/mail'
import * as dotenv from 'dotenv'
dotenv.config()


sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
    to: 'sangeethashanmugam22@gmail.com', // Change to your recipient
    from: 'sanjuriya22@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })