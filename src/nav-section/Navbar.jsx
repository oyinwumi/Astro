import React from 'react';
import { Link } from "react-router-dom"
import AstroLogo from './astro-logo.svg'

const Navbar = () => {
  return (
      <div className='narbar  items-center h-10 my-7 '>
      <nav className=' flex justify-between items-center font-normal text-lg border-b-4'>
      <img src={AstroLogo} alt="logo" className='ml-12' />
        <ul className='flex mx-4 text-center text-black '>
          <li>  <Link to='/' className=' ml-6 hover:text-violet-900'>Contact</Link></li>
          <li><Link to='/'  className=' ml-6 hover:text-violet-900'>FAQ</Link></li>
          <li>  <Link to='/'  className=' ml-6 hover:text-violet-900'>Blog</Link></li>
          <li><Link to='/'   className=' ml-6 hover:text-violet-900'>Compliance</Link></li>
        </ul>
        <button className='nav-btn border-2 border-solid items-center px-10 h-9 cursor-pointer hover:bg-violet-900 mr-12'>Sign in</button>  
      </nav>
      
      </div>
  );
}

export default Navbar;
