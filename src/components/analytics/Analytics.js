import React from 'react'
import {IoMdAnalytics} from "react-icons/io"

const Analytics = () => {
  return (
    <div className='w-full bg-indigo-500 py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex justify-center items-center text-green-400'>
            <IoMdAnalytics size={220} />
        </div>
        <div className=''>
            <h1 className='text-green-400 text-center text-2xl py-8'>Live Data Analysis Service Hosting</h1>
            <p className='sm:text-base md:text-xl text-sm text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book. It has survived not 
                only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s 
                with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker 
                including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  )
}

export default Analytics
