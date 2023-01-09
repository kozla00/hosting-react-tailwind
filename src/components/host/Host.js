import React from 'react'

const Host = () => {
  return (
    <div className='w-full h-96 shadow-2xl overflow-hidden relative bg-green-400'>
        <img src='heroback.jpg' className='absolute inset-0 h-full w-full object-cover p-8 rounded-full opacity-90 border-b-2 border-indigo-500' />
        <div className='h-full text-center mt-24 relative text-white'>
            <h1 className='text-4xl mb-4'>Web Hosting</h1>
            <p>Hosting packages adapted for different Websites, from small to professional sites with web shop.</p>
            <button className='bg-indigo-500 w-[150px] rounded-md font-medium my-4 mx-auto py-3'>Choose ur host</button>
        </div>
    </div>
  )
}

export default Host
