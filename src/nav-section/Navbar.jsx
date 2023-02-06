import React, { useState} from 'react';
import { Link } from "react-router-dom"
import AstroLogo from './astro-logo.svg'

const Navbar = () => {
  let [open, setOpen] = useState(false)
 
  return (
      <div className='items-center  my-7  '>
      <nav className='md:flex  md:justify-between   font-semibold text-lg border-b-4'>
      <div className='flex justify-between items-center'>
      <img src={AstroLogo} alt="logo" className='md:ml-14 ml-8 inline' />
      <div  onClick={() => setOpen(!open)}className='text-violet-900 text-5xl cursor-pointer md:hidden absolute right-8 top-6 text-center'>
      <ion-icon name={open ? "close" : "menu"} ></ion-icon>
      {/* <i class="fa-solid fa-bars " name={open ? "close" : "menu"}></i> */}
      </div>
      </div>
      
      <ul className= {`md:flex px-4 md:text-centertext-black md:z-auto z-50 md:static absolute w-full left-0 md:w-auto
         md:pb-0 pb-12 md:pl-0 pl-9  md:opacity-100 md:bg-white bg-white   transition-all ease-in duration-500 ${open ? 'top-20' : 'top-[-490px]'} `}>
          <li className='mx-4 my-10 md:my-0'> <Link to='/' className='  hover:text-violet-900 duration-500 md:text-2xl xl'>Contact</Link></li>
          <li  className='mx-4 my-10 md:my-0'><Link to='/'  className='  hover:text-violet-900 duration-500 md:text-2xl xl:'>FAQ</Link></li>
          <li  className='mx-4 my-10 md:my-0'>  <Link to='/'  className='  hover:text-violet-900 duration-500 md:text-2xl xl: '>Blog</Link></li>
          <li  className='mx-4 my-10 md:my-0' ><Link to='/'   className='  hover:text-violet-900 duration-500 md:text-2xl xl'>Compliance</Link></li>
          <button className='nav-btn border-2 border-solid bg-white border-violet-900 text-violet-900  rounded items-center px-10 h-9 cursor-pointer hover:bg-violet-900 hover:text-white md:mr-14 mr-8'>Sign in</button> 
        </ul>
      </nav>
      
      </div>
  );
}

export default Navbar;
