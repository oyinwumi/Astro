import React from 'react';
import Trade from './trade-icon.svg'
import Bill from './bill-icon.svg'
import Fund from './fund-1con.svg'

const Feature = () => {
  return (
    <div className='mx-12 pb-20'>
      <h2 className='text-violet-900 font-semibold text-5xl w-5/12 mb-8'>Premium Features of Astro Africa</h2>

     <div className='flex justify-center'>
     <div className='w-1/3 '>
       <div className='w-10 h-10 border-2 rounded bg-white  mb-6'>
       <img src={Trade} alt="" className='m-auto py-2' />
       </div>
        <h5 className='text-2xl mb-4'>Trade Giftcards</h5>
        <p className='w-80 text-xl'>Best Rates, Fast Payment, and Responsive Support. Experience a life without limits with Astro.  </p>
      </div>
      <div className='w-1/3 '>
       <div className='w-10 h-10 border-2 rounded bg-white  mb-6'>
       <img src={Bill} alt="" className='m-auto py-2'  />
       </div>
        <h5 className='text-2xl mb-4'>Pay Bills </h5>
        <p className='w-80 text-xl'>Recharge your cables and pay electricity Bills. Buy data on your mobile phone on Astro with ease.   </p>
      </div>
      <div className='w-1/3 '>
        <div className='w-10 h-10 border-2 rounded bg-white mb-6'>
        <img src={Fund} alt=""   className='m-auto py-2 ' />
        </div>
        <h5 className='text-2xl mb-4'>Fund Wallet </h5>
        <p className='w-80 text-xl '>Recharge your cables and pay electricity Bills. Buy data on your mobile phone on with ease   </p>
      </div>
     </div>
    </div>
  );
}

export default Feature;
