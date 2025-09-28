import React from 'react'
import phoneIcon from "../assets/images/icons-phone.png";
import emailIcon from "../assets/images/icons-mail.png";
import { Link } from 'react-router-dom';

const Contact = () => {
    return (<>
        <div>
            <div className='lg:px-[135px] px-[25px] lg:py-[90px] py-[30px]'>
                <Link to={'/'}>
                    <p className='text-[gray] hover:text-[black] transition-all duration-500'>Home / <b className='text-[black]'> Contact</b></p>
                </Link>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-[120px] gap-8 mb-[250px] px-4'>
                <div className='flex flex-col w-full max-w-[350px] h-auto lg:h-[470px] gap-6 p-8 border-2 border-gray-100 rounded-[4px] shadow-lg'>
                    <div className='flex gap-5 items-center'>
                        <img src={phoneIcon} alt="phoneIcon" className='w-10 h-10' />
                        <p className='text-2xl font-semibold'>Call To Us</p>
                    </div>
                    <p className='text-base font-normal'>We are available 24/7, 7 days a week.</p>
                    <p className='text-base font-normal'>Phone: +8801611112222</p>
                    <hr className='my-2' />
                    <div className='flex gap-5 items-center'>
                        <img src={emailIcon} alt="emailIcon" className='w-10 h-10' />
                        <p className='text-2xl font-semibold'>Write To US</p>
                    </div>
                    <p className='text-base font-normal'>
                        Fill out our form and we will contact<br />
                        you within 24 hours.
                    </p>
                    <p className='text-base font-normal'>Emails: customer@exclusive.com</p>
                    <p className='text-base font-normal'>Emails: support@exclusive.com</p>
                </div>
                
                <div className='w-full max-w-[780px] h-auto lg:h-[470px] border-2 border-gray-100 rounded-[4px] p-8 lg:py-[50px] shadow-lg'>
                    <div className='flex flex-col lg:flex-row gap-5 justify-center mb-6'>
                        <input 
                            type="text" 
                            placeholder='Name' 
                            className='w-full lg:w-[220px] h-14 p-4 rounded border border-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#DB4444] transition-all duration-500' 
                        />
                        <input 
                            type="email" 
                            placeholder='Email' 
                            className='w-full lg:w-[220px] h-14 p-4 rounded border border-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#DB4444] transition-all duration-500' 
                        />
                        <input 
                            type="number" 
                            placeholder='Phone' 
                            className='w-full lg:w-[220px] h-14 p-4 rounded border border-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#DB4444] transition-all duration-500' 
                        />
                    </div>
                    <div className='flex justify-center'>
                        <textarea 
                            placeholder='Your Message' 
                            className='rounded border border-gray-300 placeholder-gray-500 outline-none focus:border-[#DB4444] focus:ring-2 focus:ring-[#DB4444] transition-all duration-500 p-4 w-full h-40 lg:h-[176px] mb-8 resize-none'
                        ></textarea>
                    </div>
                    <div className='flex justify-center lg:justify-end'>
                        <button className='w-full lg:w-[215px] h-14 rounded bg-[#DB4444] hover:bg-[crimson] transition-all duration-500 text-lg text-white font-medium'>
                            Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Contact