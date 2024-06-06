import Image from 'next/image';

export default function Hero() {
  return (
    <section className='text-center bg-slate-300 mt-2 py-4'>
      <div className='relative w-48 h-48 mx-auto'>
        <Image
          className='rounded-full'
          src='/images/profile.svg'
          alt='Profile Picture'
          layout='fill'
          objectFit='cover'
          priority
        />
      </div>
      <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm Henry"}</h2>
      <h3 className='text-xl font-semibold'>Full-stack Engineer</h3>
      <p>Henry who want get a new job</p>
    </section>
  );
}
