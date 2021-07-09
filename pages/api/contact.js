import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  const { name, email, message, phone } = req.body

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  })

  try {
    const emailResponse = await transporter.sendMail({
      from: email,
      to: 'samklepdev@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact submission</p><br /><p><strong>Name: </strong>${name}</p><br />
      <p><strong>Phone: </strong>${phone}</p><br />
      <p><strong>Message: </strong>${message}</p><br />`,
    })

    console.log('Message sent', emailResponse.messageId)
  } catch (err) {
    console.log(err)
  }

  res.status(200).json(req.body)
}