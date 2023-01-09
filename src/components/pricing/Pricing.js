import React from 'react'

import {FiUploadCloud} from "react-icons/fi";
import {SlGameController} from "react-icons/sl";
import {SiServerless} from "react-icons/si";
import {FiServer} from "react-icons/fi";

const Pricing = () => {
  return (
    <div className='w-full py-28 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-8 '>

          <div className='w-full shadow-xl flex flex-col p-4 border-t-2 border-b-2 border-indigo-500 rounded-lg hover:scale-105 duration-300'>
            <div className='flex items-center justify-center text-green-400 mb-4 rounded-full'>
            <FiUploadCloud size={100} />
            </div>
              <h2 className='text-2xl font-bold text-center'>Web Hosting</h2>
              <div className='text-center font-medium'>
                  <p className='mx-2 mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  <p className='text-center text-4xl font-bold mt-4 border-t'>$2.99</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>More Information</button>
          </div>

          <div className='w-full shadow-xl flex flex-col p-4 rounded-lg border-t-2 border-b-2 border-green-400 hover:scale-105 duration-300'>
            <div className='flex items-center justify-center mb-4 text-indigo-500'>
            <SlGameController size={100} />
            </div>
              <h2 className='text-2xl font-bold text-center '>Game Servers</h2>
              <div className='text-center font-medium'>
                  <p className='mx-2 mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  <p className='text-center text-4xl font-bold mt-4 border-t'>$0.49</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>More Information</button>
          </div>

          <div className='w-full shadow-xl flex flex-col p-4 border-t-2 border-t-2 border-b-2 border-indigo-500 rounded-lg hover:scale-105 duration-300'>
            <div className='flex items-center justify-center mb-4 text-green-400'>
            <FiServer size={100} />
            </div>
              <h2 className='text-2xl font-bold text-center '>VPS Hosting</h2>
              <div className='text-center font-medium'>
                  <p className='mx-2 mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  <p className='text-center text-4xl font-bold mt-4 border-t'>$5.79</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>More Information</button>
          </div>

          <div className='w-full shadow-xl flex flex-col p-4 rounded-lg border-t-2 border-b-2 border-green-400 hover:scale-105 duration-300'>
            <div className='flex items-center justify-center mb-4 text-indigo-500'>
            <SiServerless size={100} />
            </div>
              <h2 className='text-2xl font-bold text-center '>Dedicated Servers</h2>
              <div className='text-center font-medium'>
                  <p className='mx-2 mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  <p className='text-center text-4xl font-bold mt-4 border-t'>$57.99</p>
              </div>
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>More Information</button>
          </div>
      </div>
    </div>
  )
}

export default Pricing
