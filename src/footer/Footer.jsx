import React from 'react';
// import { Link } from 'react-router-dom';
import FooterLogo from './footer-logo.svg'

const Footer = () => {
  return (
  <footer className='md:px-12 px-6 py-14 bg-violet-900 text-white'>
<div className='md:flex md:justify-between ' >
    <div className='md:w-1/3 md:mb-0 mb-6'>
            <img src={FooterLogo} alt=""  />
            <p className='mt-4 w-80'>Best Rates, Fast Payment, and Responsive Support. Experience a life without limits with Astro.</p>
    </div>
    <div className='md:w-1/3 md:mb-0 mb-6'>
        <h5 className='text-xl md:mb-4 mb-2'>Contact</h5>
        <p>hello@astroafrica.site</p>
    </div>
    <div className='md:w-1/3'>
     <h5 className='text-xl md:mb-4 mb-2'>Company</h5>
    <p className='mt-2'>FAQ</p>
    <p className='mt-2'>Blog</p>
    <p className='mt-2'>Compliance</p>
    </div>
</div>
    <p className='mt-8'>Astro © 2022 </p>
  </footer>
  );
}

export default Footer;
