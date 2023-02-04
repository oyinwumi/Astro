import React from 'react';
import Astrocard from './astro-card.png'
import Arrow from './arrow-icon.svg'

const AstroCard = () => {
  return (
    <div className='flex justify-between  mx-12 pb-20'>
     <div className='  border-2 bg-gray-300 w-5/12  '>
     <img src= {Astrocard} alt=" astrocard "  className='items-center m-auto '/>
     </div>
      <div className='w-1/2'>
        <h2 className='text-violet-900 font-semibold text-5xl mb-6 '>Astro Africa is Safe, Simple and Secured</h2>
        <p className='text-2xl mb-14 leading-10 '>Astro Africa is built to make all your exchange and payment activities easier and seamless. Payment is made instantly your card is confirmed. You can withdraw to your Nigerian bank account or Ghana mobile money . Astro is the best platform to sell your gift cards to Naira or Cedis.</p>
        <button className='relative border-2 border-solid text-center px-10 h-9 cursor-pointer bg-white  hover:bg-violet-900 rounded-sm'>Check Rate  <img src={Arrow} alt="" className='ml-2 absolute bottom-2 right-4' /></button> 
      </div>
    </div>
  );
}

export default AstroCard;
