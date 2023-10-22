const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
const msg = {
    to: 'sangeethashanmugam22@gmail.com',
    from: 'sanjuriya22@gmail.com', // Use the email address or domain you verified above
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
//ES6
sgMail
    .send(msg)
    .then(() => { }, error => {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }
    });
//ES8
(async () => {
    try {
        await sgMail.send(msg);
    } catch (error) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }
    }
})();