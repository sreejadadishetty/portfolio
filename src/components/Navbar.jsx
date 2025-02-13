import React from 'react'
import logo from "../assets/sreejaDadishettyLogo.jpg"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
const Navbar = () => {
  return <nav className='bg-dark-900 mb-10 flex items-center justify-between py-2'>
    <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt="logo" width={60} height={36}/>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
    <a 
          href="https://www.linkedin.com/in/sreeja-dadishetty-1034a325a/" 
          target="_blank" 
          rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/sreejadadishetty" 
          target="_blank" 
          rel="noopener noreferrer">
        <FaGithub/>
        </a>
        <a 
          href="https://www.instagram.com/sreeja.4391/?next=%2F" 
          target="_blank" 
          rel="noopener noreferrer">
        <FaInstagram />
        </a>
    </div>

  </nav>
}

export default Navbar