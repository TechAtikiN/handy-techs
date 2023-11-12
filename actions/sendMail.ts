'use server'
import nodemailer from 'nodemailer'

export async function sendMail({
  to, name, subject, body,
}: {
    to: string;
    name: string;
    subject: string;
    body: string;
  }) {
  const { EMAIL_ADDRESS, EMAIL_PASSWORD } = process.env;
  
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_ADDRESS,
      pass: EMAIL_PASSWORD,
    }
  })

  try {
    const testResult = await transport.verify()
  } catch (error) {
    console.log(error);
    return
  }

  try {
    const sendResult = await transport.sendMail({
      from: EMAIL_ADDRESS,
      to,
      subject,
      html: body
    })
  } catch (error) {
    console.log(error);
  }
}

