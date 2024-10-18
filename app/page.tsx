import Link from 'next/link';

export default function Home() {
    return (
        <div className='bg-slate-100  '>
             <div className=' flex flex-col place-content-center items-center h-screen mx-auto'>
             <h1 className=' text-2xl text-slate-700 '>Dynamic Routes Assignment by Sir Bilal </h1>
             <br />
             <h2 className=' text-xl text-slate-400'>Search country details in url </h2>
             <br />
             <h3>Country Available <ul className='text-xl text-slate-600'>
              <li>usa</li>
              <li>canada</li>
              <li>germany</li>
              <li>australia</li>
              </ul></h3>
             </div>
        </div>
    );
}
