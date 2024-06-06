import Link from 'next/link';

export default function Header() {
  return (
    // <header className='flex justify-between items-center max-md:flex-wrap max-md:max-w-full'>
    <header className='flex justify-between max-md:flex-wrap max-md:max-w-full'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>{"Henry's Blog"}</h1>
      </Link>
      <nav className='flex gap-4 justify-center my-auto text-base leading-6 whitespace-nowrap max-md:pt-4'>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/posts'>Posts</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  );
}
