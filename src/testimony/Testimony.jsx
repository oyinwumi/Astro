import React from 'react';
import ProfileImage from './profile-image.svg'
import Arrow from './arrow-icon.svg'

const Testimony = () => {
  return (
    <div className='mx-12 pb-20'>
       <div>
        <h2  className= ' text-violet-900 font-semibold text-5xl w-5/12 mb-4'>Testimonials </h2>
        <p className='text-2xl mb-8'>Don’t take our word for it, see what our clients have to say</p>
       </div>
    <div className='flex gap-8 mb-8 '>
        <div className='w-1/3  border-2 border-dashed rounded p-4'>
            <img src={ProfileImage} alt="" />
            <h5 className='text-xl mb-4'>Nora Robert</h5>
            <p >So far everything relating to my claim with General & Medical has gone smoothly. Theo Insurance  has provided a very professional service. In particular he quickly engaged with your underwriters to ensure I received a quick response and quickly communicated this to me since there is a very short time line before my medical procedure.</p>
        </div>
        <div className='w-1/3  border-2 border-dashed rounded p-4'>
        <img src={ProfileImage} alt="" />
            <h5 className='text-xl mb-4'>Nora Robert</h5>
            <p >So far everything relating to my claim with General & Medical has gone smoothly. Theo Insurance  has provided a very professional service. In particular he quickly engaged with your underwriters to ensure I received a quick response and quickly communicated this to me since there is a very short time line before my medical procedure.</p>
        </div>
        <div className='w-1/3  border-2 border-dashed rounded p-4'>
        <img src={ProfileImage} alt="" />
            <h5 className='text-xl mb-4'>Nora Robert</h5>
            <p  >So far everything relating to my claim with General & Medical has gone smoothly. Theo Insurance  has provided a very professional service. In particular he quickly engaged with your underwriters to ensure I received a quick response and quickly communicated this to me since there is a very short time line before my medical procedure.</p>
        </div>
    </div>
    <div className='align-center m-auto'>
      <h3  className= ' text-violet-900 font-semibold text-4xl text-center m-4'>Get Started with Astro.  Enjoy Swift payment and profitable trades. Experience a life without limit with Astro</h3>
      <div className='mt-6'>
      <button className='  ml-80 w-1/4 border-0 border-solid rounded text-center px-10 h-9 cursor-pointer bg-violet-900  hover:bg-opacity-70 text-white outline-none'>Trade Now</button> 
        <button className=' ml-3 w-1/4 border-2 border-solid rounded text-center px-10 relative h-9 cursor-pointer bg-white  hover:bg-violet-900 text-violet-900  outline-none'>Check Rate <img src={Arrow} alt="" className='ml-2 absolute bottom-2 right-24' /></button> 
      </div>
    </div>
    </div>
  );
}

export default Testimony;
