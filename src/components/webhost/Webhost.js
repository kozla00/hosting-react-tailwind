import React from 'react'

const Webhost = () => {
  return (
    <div className='w-full py-28 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-8 '>
        <div className='w-full shadow-4xl flex flex-col p-4 border-t-2 border-l-2 border-indigo-500 rounded-lg hover:scale-105 duration-300'>
          <div className='flex items-center justify-center text-green-400 mb-4 rounded-full'>
        </div>
            <h2 className='text-2xl font-bold text-center'>Standard Web Hosting</h2>
          <div className='text-center font-medium'>
            <p className='mx-2 mt-4 border-t-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <p className='text-center text-4xl font-bold mt-4 border-t'>$6.99</p>
            <p className='text-center text-2xl font-bold mt-4 text-yellow-500'> or $18.99 yearly</p>
          </div>
            <button className='bg-[#00df9a] w-[170px] rounded-md font-medium my-6 mx-auto py-3'>More Information</button>
        </div>

          <div className='w-full shadow-4xl flex flex-col p-4 border-b-2 border-r-2 border-indigo-500 rounded-lg hover:scale-105 duration-300'>
            <div className='flex items-center justify-center text-green-400 mb-4 rounded-full'>
            </div>
              <h2 className='text-2xl font-bold text-center'>Advanced Web Hostings</h2>
            <div className='text-center font-medium'>
              <p className='mx-2 mt-4 border-t-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              <p className='text-center text-4xl font-bold mt-4 border-t'>$9.99</p>
              <p className='text-center text-2xl font-bold mt-4 text-yellow-500'> or $20.99 yearly</p>
            </div>
              <button className='bg-[#00df9a] w-[170px] rounded-md font-medium my-6 mx-auto py-3'>More Information</button>
          </div>

          <div className='w-full shadow-4xl flex flex-col p-4 border-b-2 border-l-2 border-indigo-500 rounded-lg hover:scale-105 duration-300'>
            <div className='flex items-center justify-center text-green-400 mb-4 rounded-full'>
            </div>
              <h2 className='text-2xl font-bold text-center px-4'>Resseler Web hosting</h2>
            <div className='text-center font-medium'>
              <p className='mx-2 mt-4 border-t-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              <p className='text-center text-4xl font-bold mt-4 border-t'>$12.99</p>
              <p className='text-center text-2xl font-bold mt-4 text-yellow-500'> or $24.99 yearly</p>
            </div>
              <button className='bg-[#00df9a] w-[170px] rounded-md font-medium my-6 mx-auto py-3'>More Information</button>
          </div>

          <div className='w-full shadow-4xl flex flex-col p-4 border-t-2 border-r-2 border-indigo-500 rounded-lg hover:scale-105 duration-300'>
            <div className='flex items-center justify-center text-green-400 mb-4 rounded-full'>
            </div>
              <h2 className='text-2xl font-bold text-center px-5'>Radio Web Hosting</h2>
            <div className='text-center font-medium'>
              <p className='mx-2 mt-4 border-t-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              <p className='text-center text-4xl font-bold mt-4 border-t'>$18.99</p>
              <p className='text-center text-2xl font-bold mt-4 text-yellow-500'> or $29.99 yearly</p>
            </div>
              <button className='bg-[#00df9a] w-[170px] rounded-md font-medium my-6 mx-auto py-3'>More Information</button>
          </div>      
      </div>
    </div>
  )
}

export default Webhost
