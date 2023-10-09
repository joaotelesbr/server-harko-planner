import { env } from '@/env'
import { IEmailData } from '@/interface/IData'
import nodemailer from 'nodemailer'

export async function sendEmail({
  eventName,
  toEmail,
  userEmail,
  icsContent,
  icsFileName,
}: IEmailData) {
  const transporter = nodemailer.createTransport({
    service: env.DATABASE_SERVICE,
    auth: {
      user: env.DATABASE_EMAIL,
      pass: env.DATABASE_PASSWORD,
    },
  })
  const mailOptions = {
    from: env.DATABASE_EMAIL,
    to: toEmail,
    subject: `Harko - Convite para o evento:${eventName}`,
    html: `<span> ${eventName} </span>`,
    cc: userEmail,
  }

  await transporter
    .sendMail(mailOptions)
    .then(() => {
      console.log('email enviado com sucesso!')
    })
    .catch((error) => {
      console.log('erro ao enviar o email:', error)
    })
}
