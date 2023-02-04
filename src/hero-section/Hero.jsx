import React from 'react';
import GhanaLogo from './ghana-logo.svg';
import NaijaLogo from './naija-logo.svg';
import Mockup from './mockup-one.png'
import Arrow from './arrow-icon.svg'

 export default function Hero () {
  return (
    <div className='hero-page py-20 flex  mx-12 '>
      <div className="left-hero-page  w-1/2">
        <div className="flex  p-2 border-2 border-violet-900 w-72 rounded-md mb-6 ">
            <div className="naija flex text-center">
                <img src={NaijaLogo} alt="nigeria flag" />
                <p className='ml-2'>Naira</p>
            </div>
            <div className="flex ml-3 ">
                <img src={GhanaLogo} alt="ghana flag" />
                <p className='ml-2'>Ghana cedes</p>
            </div>
        </div>
        <div className='w-10/12'>
        <h1 className='text-7xl  text-brown mb-8 '>The Fastest Way to Sell Giftcards in Naira and Cedes</h1>
        <p className='text-xl  text-brown  mb-14  leading-8'>Best Rates, Fast Payment, and Responsive Support. Experience a life without limits with Astro.</p>
        </div>
      <div className='flex gap-4'>
      <button className=' w-2/5 border-0 border-solid rounded text-center px-10 h-9 cursor-pointer bg-violet-900  hover:bg-opacity-70 text-white outline-none'>Trade Now</button> 
        <button className=' relative w-2/5 border-2 border-solid rounded text-center px-10 h-9 cursor-pointer bg-white  hover:bg-violet-900 text-violet-900  outline-none'>Check Rate <img src={Arrow} alt="" className='ml-2 absolute bottom-2 right-14' /></button> 
      </div>
      </div>
      <div className="right-hero-page  ml-5 w-6/12">
        <img src={Mockup} alt="" className='w-full h-screen ' />
      </div>
    </div>

  );
}