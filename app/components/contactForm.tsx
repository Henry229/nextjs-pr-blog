'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { sendEmail } from '../services/email';
import toast from 'react-hot-toast';
import { sendContactEmail } from '../services/contact';

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const info = await sendContactEmail(form);
      console.log(info);
      toast.success('Email sent successfully');
    } catch (error) {
      console.error('Failed to send email:', error);
      toast.error('Failed to send email');
    } finally {
      setForm(DEFAULT_DATA); // Reset form after sending, regardless of success or failure
    }
  };

  return (
    <section className='w-full max-w-md'>
      <form
        onSubmit={onSubmit}
        className='w-full flex flex-col my-4 p-4 bg-slate-700 rounded-md shadow-md gap-2 text-white'
      >
        <label htmlFor='from' className='font-semibold'>
          Your Email
        </label>
        <input
          type='email'
          id='from'
          name='from'
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className='text-black border border-gray-300 p-2 rounded'
        />
        <label htmlFor='subject' className='font-semibold'>
          Subject
        </label>
        <input
          type='text'
          id='subject'
          name='subject'
          required
          value={form.subject}
          onChange={onChange}
          className='text-black border border-gray-300 p-2 rounded'
        />
        <label htmlFor='message' className='font-semibold'>
          Message
        </label>
        <textarea
          rows={10}
          id='message'
          name='message'
          required
          value={form.message}
          onChange={onChange}
          className='text-black border border-gray-300 p-2 rounded'
        />
        <button className='bg-yellow-300 hover:bg-yellow-400 text-black font-bold'>
          Submit
        </button>
      </form>
    </section>
  );
}
