import React from 'react';
import Astrocard from './astro-card.png'
import Arrow from './arrow-icon.svg'

const AstroCard = () => {
  return (
    <div className='md:flex md:justify-between  md:mx-14 mx-8 md:pb-20 pb:10'>
     <div className='  border-2 bg-gray-300 md:w-5/12 w-full '>
     <img src= {Astrocard} alt=" astrocard "  className='items-center m-auto '/>
     </div>
      <div className='md:w-1/2 w-full'>
        <h2 className='text-violet-900 font-semibold md:text-5xl text-3xl mb-6 md:mt-0 mt-8'>Astro Africa is Safe, Simple and Secured</h2>
        <p className='md:text-2xl text-xl md:mb-14 mb-5 md:leading-10 leading-8 '>Astro Africa is built to make all your exchange and payment activities easier and seamless. Payment is made instantly your card is confirmed. You can withdraw to your Nigerian bank account or Ghana mobile money . Astro is the best platform to sell your gift cards to Naira or Cedis.</p>
        <button className='relative border-2 border-solid text-center px-10 h-9 cursor-pointer bg-white  hover:bg-violet-900  hover:text-white rounded-sm'>Check Rate  <img src={Arrow} alt="" className='ml-2 absolute bottom-2 right-4' /></button> 
      </div>
    </div>
  );
}

export default AstroCard;
