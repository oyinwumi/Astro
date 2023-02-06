import React from 'react';
import Trade from './trade-icon.svg'
import Bill from './bill-icon.svg'
import Fund from './fund-1con.svg'

const Feature = () => {
  return (
    <div className='md:mx-14 mx-8 md:pb-20 pb-10'>
      <h2 className='text-violet-900 font-semibold md:text-5xl text-3xl md:w-5/12 w-full md:mt-0 mt-8 mb-8'>Premium Features of Astro Africa</h2>

     <div className='md:flex justify-center'>
     <div className='md:w-1/3 w-full md:mt-0 mt-10'>
       <div className='w-10 h-10 border-2 rounded bg-white md:mb-6 mb-3'>
       <img src={Trade} alt="" className='m-auto py-2' />
       </div>
        <h5 className='text-2xl md:mb-4 mb-2'>Trade Giftcards</h5>
        <p className='w-80 text-xl'>Best Rates, Fast Payment, and Responsive Support. Experience a life without limits with Astro.  </p>
      </div>
      <div className='md:w-1/3 w-full md:mt-0 mt-10'>
       <div className='w-10 h-10 border-2 rounded bg-white md:mb-6 mb-3'>
       <img src={Bill} alt="" className='m-auto py-2'  />
       </div>
        <h5 className='text-2xl md:mb-4 mb-2'>Pay Bills </h5>
        <p className='w-80 text-xl'>Recharge your cables and pay electricity Bills. Buy data on your mobile phone on Astro with ease.   </p>
      </div>
      <div className='md:w-1/3 w-full md:mt-0 mt-10'>
        <div className='w-10 h-10 border-2 rounded bg-whitemd:mb-6 mb-3'>
        <img src={Fund} alt=""   className='m-auto py-2 ' />
        </div>
        <h5 className='text-2xl md:mb-4 mb-2'>Fund Wallet </h5>
        <p className='w-80 text-xl '>Recharge your cables and pay electricity Bills. Buy data on your mobile phone on with ease   </p>
      </div>
     </div>
    </div>
  );
}

export default Feature;
