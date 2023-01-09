import React from 'react';

const Hero = () => {
  return (  
      <div className='max-w mt-[-96px] w-full h-screen pt-24 mx-auto text-center flex flex-col justify-center bg-indigo-500'>
        <p className='text-green-400 font-bold p-2'>
          GROWING WITH OUR CUSTOMER'S
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white font-mono'>
          Fast,affordable<br></br>Webhosting Services.
        </h1>
        <p className='md:text-2xl text-xl font-bold text-green-400'>Search and register your domain today, for 50% off.</p>
        <button className='bg-green-400 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'><a href="/hosting">Get Started</a></button>
      </div>

  );
};

export default Hero;
