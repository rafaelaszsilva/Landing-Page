const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

const port = 3000;
const credentials = {
  from: {
    email: 'sender@example.com',
    password: 'mysuperstrongemailpassword'
  },
  to: {
    email: 'receiver@example.com'
  }
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', (req, res) => {
  sendEmail(req.body.subject, req.body.message);
  return res.json('Success');
})

app.listen(port, () => console.log(`Server listening on port ${port}!`));

async function sendEmail(subject, message) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: credentials.from.email,
      pass: credentials.from.password
    }
  });

  await transporter.sendMail({
    from: credentials.from.email,
    to: credentials.to.email,
    subject: subject,
    text: message,
    html: `<p>${message}</p>`
  });
}