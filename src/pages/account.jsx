import React from 'react'
import { Link } from 'react-router-dom';

const Account = () => {
    return (<>
        <div>
            <div className='lg:px-[100px] px-[35px] lg:py-[90px] py-[45px]'>
                <Link to={'/'}>
                    <p className='text-[gray] hover:text-[black] transition-all duration-500'>Home / <b className='text-[black]'>My account</b></p>
                </Link>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-start lg:gap-[220px] gap-8 lg:mb-[300px] mb-[90px] px-4'>
                <div className='flex flex-col gap-[15px] w-full lg:w-auto ml-[30px]'>
                    <p className='text-[18px] font-[500] hover:text-[crimson] transition-all duration-500'>Manage My Account</p>
                    <ul className='text-[16px] text-[#808080] font-[400] flex flex-col gap-[8px]'>
                        <li className='hover:text-[#DB4444] transition-all duration-500'>My Profile</li>
                        <li className='hover:text-[#DB4444] transition-all duration-500'>Address Book</li>
                        <li className='hover:text-[#DB4444] transition-all duration-500'>My Payment Options</li>
                    </ul>
                    <p className='text-[18px] font-[500] hover:text-[crimson] transition-all duration-500'>Manage My Orders</p>
                    <ul className='text-[16px] text-[#808080] font-[400] flex flex-col gap-[8px]'>
                        <li className='hover:text-[#DB4444] transition-all duration-500'>My Returns</li>
                        <li className='hover:text-[#DB4444] transition-all duration-500'>My Cancellations</li>
                    </ul>
                    <p className='text-[18px] font-[500] hover:text-[crimson] transition-all duration-500'>Manage My Wishlist</p>
                </div>
                <div className='w-full lg:w-[850px] h-auto lg:h-[530px] border-[whitesmoke] shadow-lg p-6 lg:p-[50px]'>
                    <h1 className='text-[24px] text-[#DB4444] font-[500]'>Profile</h1>
                    <div className='flex flex-col lg:flex-row gap-5 mb-6'>
                        <input type="text" placeholder='First name' className='w-full lg:w-[360px] h-[45px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-gray-300 placeholder:text-[gray] outline-none focus:border focus:ring-2 focus:ring-[#DB4444] transition-all duration-500' />
                        <input type="text" placeholder='Last name' className='w-full lg:w-[360px] h-[45px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-gray-300 placeholder:text-[gray] outline-none focus:border focus:ring-2 focus:ring-[#DB4444] transition-all duration-500' />
                    </div>
                    <div className='flex flex-col lg:flex-row gap-5 mb-8 lg:mb-[50px]'>
                        <input type="text" placeholder='Email address' className='w-full lg:w-[360px] h-[45px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-gray-300 placeholder:text-[gray] outline-none focus:border focus:ring-2 focus:ring-[#DB4444] transition-all duration-500' />
                        <input type="text" placeholder='Street address' className='w-full lg:w-[360px] h-[45px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-gray-300 placeholder:text-[gray] outline-none focus:border focus:ring-2 focus:ring-[#DB4444] transition-all duration-500' />
                    </div>
                    <h1 className='text-[24px] font-[500]'>Password Changes</h1>
                    <input type="text" placeholder='Current passwod' className='mb-6 w-full h-[45px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-gray-300 placeholder:text-[gray] outline-none focus:border focus:ring-2 focus:ring-[#DB4444] transition-all duration-500' />
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <input type="text" placeholder='New passwod' className='w-full lg:w-[360px] h-[45px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-gray-300 placeholder:text-[gray] outline-none focus:border focus:ring-2 focus:ring-[#DB4444] transition-all duration-500' />
                        <input type="text" placeholder='Confirm new passwod' className='w-full lg:w-[360px] h-[45px] p-[5px] px-[15px] rounded-[4px] border-[2px] border-gray-300 placeholder:text-[gray] outline-none focus:border focus:ring-2 focus:ring-[#DB4444] transition-all duration-500' />
                    </div>
                    <div className='flex flex-col lg:flex-row gap-3 lg:gap-[5px] pt-8 lg:pt-[35px] lg:justify-end'>
                        <button className='w-full lg:w-[180px] h-[45px] rounded-[4px] hover:bg-[crimson] hover:text-[whitesmoke] transition-all duration-500 text-[18px] text-[black] border border-gray-300'>Cancel</button>
                        <button className='w-full lg:w-[180px] h-[45px] rounded-[4px] bg-[#DB4444] hover:bg-[crimson] transition-all duration-500 text-[18px] text-[whitesmoke]'>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Account