import React from 'react';
import ProfileImage from './profile-image.svg'
import Arrow from './arrow-icon.svg'

const Testimony = () => {
  return (
    <div className='md:mx-14 mx-8 md:pb-20 pb-10'>
       <div>
        <h2  className= ' text-violet-900 font-semibold md:text-5xl text-3xl md:w-5/12 w-full mb-4'>Testimonials </h2>
        <p className='md:text-2xl text-xl mb-8'>Don’t take our word for it, see what our clients have to say</p>
       </div>
    <div className='md:flex md:gap-8 md:mb-8 '>
        <div className='md:w-1/3 w-full border-2 border-dashed rounded p-4 md:mb-0 mb-4'>
            <img src={ProfileImage} alt="" />
            <h5 className='text-xl mb-4'>Nora Robert</h5>
            <p >So far everything relating to my claim with General & Medical has gone smoothly. Theo Insurance  has provided a very professional service. In particular he quickly engaged with your underwriters to ensure I received a quick response and quickly communicated this to me since there is a very short time line before my medical procedure.</p>
        </div>
        <div className='md:w-1/3 w-full  border-2 border-dashed rounded p-4 md:mb-0 mb-4'>
        <img src={ProfileImage} alt="" />
            <h5 className='text-xl mb-4'>Nora Robert</h5>
            <p >So far everything relating to my claim with General & Medical has gone smoothly. Theo Insurance  has provided a very professional service. In particular he quickly engaged with your underwriters to ensure I received a quick response and quickly communicated this to me since there is a very short time line before my medical procedure.</p>
        </div>
        <div className='md:w-1/3 w-full border-2 border-dashed rounded p-4 md:mb-0 mb-4'>
        <img src={ProfileImage} alt="" />
            <h5 className='text-xl mb-4'>Nora Robert</h5>
            <p>So far everything relating to my claim with General & Medical has gone smoothly. Theo Insurance  has provided a very professional service. In particular he quickly engaged with your underwriters to ensure I received a quick response and quickly communicated this to me since there is a very short time line before my medical procedure.</p>
        </div>
    </div>
    <div className='align-center m-auto'>
      <h3  className= ' text-violet-900 font-semibold md:text-4xl text-2xl md:text-center  mt-10'>Get Started with Astro.  Enjoy Swift payment and profitable trades. Experience a life without limit with Astro</h3>
      <div className='my-8'>
      <button className=' md:ml-80 md:w-1/4 w-2/5 border-0 border-solid rounded text-center md:px-10 h-9 cursor-pointer bg-violet-900  hover:bg-opacity-70 text-white outline-none'>Trade Now</button> 
        <button className=' ml-3 md:w-1/4  w-2/5 border-2 border-solid rounded text-center md:px-10 relative h-9 cursor-pointer bg-white  hover:bg-violet-900 text-violet-900 hover:text-white  outline-none'>Check Rate <img src={Arrow} alt="" className='ml-2 absolute bottom-2 md:right-24  right-3' /></button> 
      </div>
    </div>
    </div>
  );
}

export default Testimony;
