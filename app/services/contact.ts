// sendContactEmail라는 axios를 사용한 handler를 만들어서 사용한다.
// method는 POST로 설정하고, data로는 contactData를 넘겨준다.

import axios from 'axios';
import { EmailData } from './email';

export async function sendContactEmail(email: EmailData) {
  try {
    const response = await axios.post('/api/contact', email);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios specific error
      console.error(
        'Error sending email:',
        error.response?.data || error.message
      );
    } else {
      // General error
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}
