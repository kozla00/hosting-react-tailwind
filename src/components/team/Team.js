import React from 'react'

import {HiUser} from "react-icons/hi"
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"

const Team = () => {
  return (
    <div className='w-full bg-indigo-500 mb-14'>
      <div className='text-center text-white'>
        <p className='text-xl'>Our Team</p>
        <h1 className='text-4xl font-mono'>Meet Our Team</h1>
        <p className='text-green-400 font-mono'>There are many more members in our team, but we display different ones every month.</p>
      </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 grid-cols-2 gap-4 mt-8'>   
      <div className='w-full shadow-xl flex flex-col p-4 border-t-2 border-white border-b-4 rounded-lg hover:scale-105 duration-300 bg-green-400'>       
            
      <div className='flex items-center justify-center text-white mb-4 rounded-xl'>
        <HiUser size={45} />
      </div>
      <div className='text-center font-medium'>
        <h2 className='text-2xl font-bold text-center border-b-4 rounded-xl pb-2 text-white'>Kate Bell</h2>
        <p className='mt-6 text-white'>App Designer</p>
      </div>       
        <ul className='flex items-center justify-center text-2xl text-indigo-500'>
          <li className='p-2'><BsFacebook /></li>
          <li className='p-2'><BsTwitter /></li>
          <li className='p-2'><AiFillInstagram /></li>
        </ul>    
      </div>

      <div className='w-full shadow-xl flex flex-col p-4 border-t-2 border-white border-b-4 rounded-lg hover:scale-105 duration-300 bg-green-400'>         
        <div className='flex items-center justify-center text-white mb-4 rounded-xl'>
          <HiUser size={45} />
        </div>
        <div className='text-center font-medium'>
          <h2 className='text-2xl font-bold text-center border-b-4 rounded-xl pb-2 text-white'>Kate Bell</h2>
          <p className='mt-6 text-white'>App Designer</p>
        </div>
          <ul className='flex items-center justify-center text-2xl text-indigo-500'>
            <li className='p-2'><BsFacebook /></li>
            <li className='p-2'><BsTwitter /></li>
            <li className='p-2'><AiFillInstagram /></li>
          </ul>      
      </div>
      <div className='w-full shadow-xl flex flex-col p-4 border-t-2 border-white border-b-4 rounded-lg hover:scale-105 duration-300 bg-green-400'>         
        <div className='flex items-center justify-center text-white mb-4 rounded-xl'>
          <HiUser size={45} />
        </div>
        <div className='text-center font-medium'>
          <h2 className='text-2xl font-bold text-center border-b-4 rounded-xl pb-2 text-white'>Kate Bell</h2>
          <p className='mt-6 text-white'>App Designer</p>
        </div>
          <ul className='flex items-center justify-center text-2xl text-indigo-500'>
            <li className='p-2'><BsFacebook /></li>
            <li className='p-2'><BsTwitter /></li>
            <li className='p-2'><AiFillInstagram /></li>
          </ul>      
      </div>
      <div className='w-full shadow-xl flex flex-col p-4 border-t-2 border-white border-b-4 rounded-lg hover:scale-105 duration-300 bg-green-400'>         
        <div className='flex items-center justify-center text-white mb-4 rounded-xl'>
          <HiUser size={45} />
        </div>
        <div className='text-center font-medium'>
          <h2 className='text-2xl font-bold text-center border-b-4 rounded-xl pb-2 text-white'>Kate Bell</h2>
          <p className='mt-6 text-white'>App Designer</p>
        </div>
          <ul className='flex items-center justify-center text-2xl text-indigo-500'>
            <li className='p-2'><BsFacebook /></li>
            <li className='p-2'><BsTwitter /></li>
            <li className='p-2'><AiFillInstagram /></li>
          </ul>      
      </div>
      </div>
    </div>
  )
}

export default Team

