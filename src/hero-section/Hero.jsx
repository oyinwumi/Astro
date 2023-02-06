import React from 'react';
import GhanaLogo from './ghana-logo.svg';
import NaijaLogo from './naija-logo.svg';
import Mockup from './mockup-one.png'
import Arrow from './arrow-icon.svg'

 export default function Hero () {
  return (
    <div className='md:py-20 py-10 md:flex md: justify-between md:mx-14 mx-8 '>
      <div className="left-hero-page  md:w-1/2 w-full">
        <div className="flex  p-2 border-2 border-violet-900 w-72 rounded-md mb-6 md:z-auto z-0 ">
            <div className=" flex text-center">
                <img src={NaijaLogo} alt="nigeria flag" />
                <p className='ml-2'>Naira</p>
            </div>
            <div className="flex ml-3 ">
                <img src={GhanaLogo} alt="ghana flag" />
                <p className='ml-2'>Ghana cedes</p>
            </div>
        </div>
        <div className='md:w-10/12 w-full'>
        <h1 className='md:text-7xl text-4xl text-brown mb-8 '>The Fastest Way to Sell Giftcards in Naira and Cedes</h1>
        <p className='text-xl  text-brown  mb-14  leading-8'>Best Rates, Fast Payment, and Responsive Support. Experience a life without limits with Astro.</p>
        </div>
      <div className='flex gap-4 md:mb-0 mb-10'>
      <button className='md:w-2/5 w-1/2  border-0 border-solid rounded text-center md:px-10 h-9 cursor-pointer bg-violet-900  hover:bg-opacity-70 text-white outline-none'>Trade Now</button> 
        <button className=' relative md:w-2/5  w-1/2 border-2 border-solid rounded text-center md:px-10  h-9 cursor-pointer bg-white  hover:bg-violet-900 text-violet-900 hover:text-white outline-none'>Check Rate <img src={Arrow} alt="" className='ml-2 absolute md:bottom-2  bottom-2 md:right-12 right-5' /></button> 
      </div>
      </div>
      <div className=" md:w-6/12 w-full">
        <img src={Mockup} alt="" className='w-auto h-auto ' />
      </div>
    </div>

  );
}