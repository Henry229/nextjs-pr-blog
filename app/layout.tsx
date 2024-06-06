import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/header';
import Footer from './components/footer';
import { ToastProvider } from '@/providers/toast-provider';

const sans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Henry's Blog",
  description: 'My blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={sans.className}>
      <body className='container flex flex-col w-full max-w-screen-2xl mx-auto'>
        <Header />
        <ToastProvider />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
