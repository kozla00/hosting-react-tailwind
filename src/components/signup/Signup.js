import React from 'react'

const Signup = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover border-r-4 border-indigo-500' src="heroback.jpg" alt="" />
        </div>

        <div className='bg-green-400 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-indigo-500 p-8 px-8'>
                <h2 className='text-4xl dark:text-white font-bold text-center'>signUp</h2>
                <div className='flex flex-col text-white py-2'>
                    <label>First Name</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-white py-2'>
                    <label>Last Name</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-white py-2'>
                    <label>UserName</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-white py-2'>
                    <label>E-mail</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
                </div>
                <div className='flex flex-col text-white py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> You agree to our Terms and Privacy Policy</p>
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>SIGN UP</button>
            </form>
        </div>
    </div>
  )
}

export default Signup
