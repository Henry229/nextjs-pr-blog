// POST로 email을 보내는 handler를 만들는데 try, catch를 사용해서 error를 핸들링한다.
// yup이라는 라이브러리를 상요해서 email의 validation을 한다.
// services/email.ts의 sendEmail 함수를 사용해서 email을 보낸다.

import { EmailData, sendEmail } from '@/app/services/email';
import * as yup from 'yup';

import { NextRequest, NextResponse } from 'next/server';

const schema = yup.object().shape({
  from: yup.string().email('Invalid email').required('Email is required'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await schema.validate(body, { abortEarly: false });
    await sendEmail(body as EmailData);
    console.log('Validated Email :', body);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }

    console.error('Failed to send email:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send email',
      },
      { status: 500 }
    );
  }
}
