import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
       
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" /> 
                <p className='w-80 md:w2/3 text-gray-600'>
                Explore a world of stories, knowledge, and imagination. 
                Whether you're searching for adventure, insight, or a quiet escape, there's a book waiting for you. 
                Start your next chapter today.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+62-212-456-7890</li>
                    <li>contact@bookeefy.com</li>
                </ul>
            </div>

        </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025@ bookeefy.com - All Right Reserved. </p>
            </div>

    </div>
  )
}

export default Footer
