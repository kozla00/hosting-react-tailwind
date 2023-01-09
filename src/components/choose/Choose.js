import React from 'react'
import {ImPower} from "react-icons/im"
import {ImSearch} from "react-icons/im"
import {BiWorld} from "react-icons/bi"
import {RiLiveLine} from "react-icons/ri"

const Choose = () => {
  return (
    <div className='max-w mx-auto grid md:grid-cols-4 border-t-2 border-b-2 border-white text-center'>
        <div className='bg-green-400 text-indigo-500 border-r-2 border-white py-12'>
            <div className='flex items-center justify-center'>
                <ImPower size={100} />
            </div>
            <h1 className="pt-12 pb-8 text-white">Powerful Features</h1>
            <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book.
            </p>
        </div>

        <div className='bg-indigo-500 text-green-400 border-r-2 border-white py-12'>
            <div className='flex items-center justify-center'>
                <ImSearch  size={100} />
            </div>
            <h1 className='pt-12 pb-8 text-white'>Totaly Optimised</h1>
            <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book.
            </p>
        </div>

        <div className='bg-green-400 text-indigo-500 border-r-2 border-white items-center py-12'>
            <div className='flex items-center justify-center'>
                <BiWorld size={100} />
            </div>
            <h1 className='pt-12 pb-8 text-white'>Worldwide Support</h1>
            <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book.
            </p>
        </div>

        <div className='bg-indigo-500 text-green-400 py-12'>
            <div className='flex items-center justify-center'>
                <RiLiveLine size={100} />
            </div>
            <h1 className='pt-12 pb-8 text-white'>Live Analysis</h1>
            <p className='text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting 
            industry. Lorem Ipsum has been the industry's standard dummy text 
            ever since the 1500s, when an unknown printer took a galley of type 
            and scrambled it to make a type specimen book.
            </p>
        </div> 
    </div> 
  )
}

export default Choose
