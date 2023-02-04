import React from 'react';
import Mockup from './mockup-two.png'
import Arrow from './white-arrow.svg'

const SellGiftcard = () => {
  return (
    <div className='mx-12 pb-20'>
      <h2  className= ' text-violet-900 font-semibold text-5xl w-5/12 mb-8'>How To Sell Your Gifts Cards in Four Easy Steps</h2>
    <div className='flex justify-between '>
    <div>
        <img src={Mockup} alt="" />
      </div>
      <div className='w-1/2'>
        <div  className='mb-10' >
           <div className='flex mb-1'>
              <span className='w-10 h-10 text-violet-900 bg-slate-100 rounded-full text-center mr-4 mb-1 p-2'>1</span> 
              <h5 className='text-3xl'>Select Wallet</h5>
           </div>
            <div className=' flex gap-x-4 ' >
                <span className='border-r-2 border-violet-300 px-2'></span>
                <p className=' w-full text-2xl pl-4 '>Select your preferred wallet you’d like to get paid to.</p>
            </div>
        </div>
       <div className='mb-10'>
            <div className='flex mb-1'>
                <span className='w-10 h-10 text-violet-900 bg-slate-100 rounded-full text-center mr-4 mb-1 p-2'>2</span>
                <h5 className='text-3xl'>Select Gift Card </h5>
            </div>
            <div  className=' flex gap-x-4 '>
                <span className='border-r-2 border-violet-300 px-2'></span>       
                <p  className=' w-full text-2xl pl-4 '>Select the gift card you want to trade and confirm rates</p>                                                  
            </div>
            
       
       </div>
       <div className='mb-10'>
            <div className='flex mb-1'>
                <span className='w-10 h-10 text-violet-900 bg-slate-100 rounded-full text-center mr-4 mb-1 p-2'>3</span>
                <h5 className='text-3xl'>Upload The Card</h5>
            </div>
        <div  className=' flex gap-x-4 '>
            <span className='border-r-2 border-violet-300 px-2'></span>
            <p className=' w-full text-2xl pl-4 '>Upload the card you want to sell, and wait for confirmation.</p>
            </div>
       </div>
      
      <div  className='mb-10'>
          <div className='flex mb-1'>
            <span className='w-10 h-10 text-violet-900 bg-slate-100 rounded-full text-center mr-4 mb-1 p-2'>4</span>
            <h5 className='text-3xl'>Card Confirmation</h5>
            </div>
            <p  className=' w-full text-2xl pl-4'>Once that card is confirmed and your wallet is funded, you can proceed to withdraw money into your preferred bank account </p>
        
      </div>
        <button className='w-1/4  relative border-0 border-solid rounded text-center px-10 h-9 cursor-pointer bg-violet-900  hover:bg-opacity-70 text-white outline-none mt-8'>Trade Now <img src={Arrow} alt="" className='ml-2 absolute bottom-2 right-4' /></button> 
      </div>
    </div>
    </div>
  );
}

export default SellGiftcard;
