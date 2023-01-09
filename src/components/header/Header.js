import React, {useState} from 'react'
import {TbHexagons} from "react-icons/tb"
import {AiOutlineClose, AiOutlineAlignRight} from "react-icons/ai"


const Header = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (  
    <div className="flex justify-between items-center  bg-indigo-500 h-24 max-w mx-auto px-4 drop-shadow-xl border-b-4 border-green-400">
      <h1 className='flex items-center w-full text-4xl font-bold text-white font-mono px-28'>
      <span className='text-6xl text-green-400'><TbHexagons /></span>
        <a href="/">HexaHost</a>
      </h1>
      <ul className='hidden md:flex flex mr-32 text-xl font-mono text-white'>
        <li>
          <a href="/" className='p-4'>home</a>
        </li>
        <li>
          <a href="/hosting" className='p-4'>hosting</a>
        </li>
        <li>
          <a href="/security" className='p-4'>security</a>
        </li>
        <li>
          <a href="/about" className='p-4'>about</a>
        </li>
        <li>
          <a href="/contact" className='p-4'>contact</a>
        </li>
        <li>
          <a href="/signin" className='p-4 bg-green-400 rounded-xl'>signIn</a>
        </li>
        <li>
          <a href="/signup" className='p-4 bg-green-400 rounded-xl mx-2'>signUp</a>
        </li>
      </ul>
    <div onClick={handleNav} className='block md:hidden text-white'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineAlignRight size={25} />}
    </div>
      <ul className={nav ? 'fixed left-0 top-[100%] w-[60%] border-r-2  border-r-green-400 font-mono bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed right-[100%]'}>
        <li className='p-4 border-t-4 border-b-2 border-green-400'>
        <a href="/">home</a>
        </li>
        <li className='p-4 border-t-2 border-b-2 border-green-400'>
        <a href="/hosting">hosting</a>
        </li>
        <li className='p-4 border-t-2 border-b-2 border-green-400'>
        <a href="/security">security</a>
        </li>
        <li className='p-4 border-t-2 border-b-2 border-green-400'>
        <a href="/about">contact</a>
        </li>
        <li className='p-4 border-t-2 border-b-2 border-green-400'>
        <a href="/contact">contact</a>
        </li>
        <li className='p-4 border-t-2 border-b-2 border-green-400'>
        <a href="/signin">signIn</a>
        </li>
        <li className='p-4 border-t-2 border-b-2 border-green-400'>
        <a href="/signup" >signUp</a>
        </li>
      </ul>
    </div>
  )
}

export default Header

