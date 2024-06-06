// nodemailer를 사용해서 이메일을 보내는 서비스
// EmailData라는 type은 from, subject, message를 가지고 있음
// sendEmail 함수는 EmailData를 인자로 받아서 Promise를 반환함

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export type EmailData = {
  from: string;
  subject: string;
  message: string;
};

export async function sendEmail({ subject, from, message }: EmailData) {
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS:', process.env.EMAIL_PASSWORD);

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from,
    to: process.env.EMAIL_USER,
    subject: `[BLOG] ${subject}`,
    html: `
        <h1>${subject}</h1>
        <div>${message}</div>
        <br/>
        <p>보낸사람: ${from}</p>
        `,
  });

  return info;
}
