import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoGoogle from "../assets/images/Icon-Google.png"
import { API } from "../utils/config";

export default function SignUp() {
    const navigate = useNavigate();

    async function signUp(newAccount) {
        try {
            const { data } = await API.post(`Account/register`, newAccount);
            console.log(newAccount)
            return data.data;
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAccount = {
            userName: e.target["userName"].value,
            phoneNumber: e.target["phoneNumber"].value,
            email: e.target["email"].value,
            password: e.target["password"].value,
            confirmPassword: e.target["confirmPassword"].value,
        }
        signUp(newAccount);
        navigate("/login")
    }

    return (<>
        <div className='flex justify-center lg:pt-[200px] pt-[70px] lg:pb-[150px] pb-[70px]'>
            <div className='flex flex-col gap-[20px]'>
                <h1 className='text-[32px] font-[600]'>Create an account</h1>
                <p className='text-[16px] font-[400]'>Enter your details below</p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
                    <input name="userName" type="text" placeholder='Name' className='w-[360px] h-[45px] p-[5px] px-[15px] rounded-[4px] border-[1px] border-gray-300  placeholder:text-[gray] outline-none focus:ring-1 focus:ring-[crimson] focus:border focus:border-[#DB4444] transition-all duration-500' />
                    <input name="phoneNumber" type="number" placeholder='Phone number' className='w-[360px] h-[45px] p-[5px] px-[15px] rounded-[4px] border-[1px] border-gray-300  placeholder:text-[gray] outline-none focus:ring-1 focus:ring-[crimson] focus:border focus:border-[#DB4444] transition-all duration-500' />
                    <input name="email" type="email" placeholder='Email' className='w-[360px] h-[45px] p-[5px] px-[15px] rounded-[4px] border-[1px] border-gray-300  placeholder:text-[gray] outline-none focus:ring-1 focus:ring-[crimson] focus:border focus:border-[#DB4444] transition-all duration-500' />
                    <input name="password" type="password" placeholder='Password' className='w-[360px] h-[45px] p-[5px] px-[15px] rounded-[4px] border-[1px] border-gray-300  placeholder:text-[gray] outline-none focus:ring-1 focus:ring-[crimson] focus:border focus:border-[#DB4444] transition-all duration-500' />
                    <input name="confirmPassword" type="password" placeholder='Confirm password' className='w-[360px] h-[45px] p-[5px] px-[15px] rounded-[4px] border-[1px] border-gray-300  placeholder:text-[gray] outline-none focus:ring-1 focus:ring-[crimson] focus:border focus:border-[#DB4444] transition-all duration-500' />
                    <button type="submit" className='w-[360px] h-[45px] bg-[#DB4444] hover:bg-[crimson] transition-all duration-500 text-[18px] font-[500] text-[whitesmoke] rounded-[4px]'>Create Account</button>
                </form>
                <button className='w-[360px] h-[45px] rounded-[4px] flex gap-[20px] justify-center items-center border border-black dark:border-white hover:opacity-55 transition-all duration-500'>
                    <img src={LogoGoogle} alt="LogoGoogle" className='w-[24px] h-[24px]' />
                    <p className='text-[16px] font-[500] hover:underline hover:text-[#DB4444] transition-all duration-500'>Sign up with Google</p></button>
                <p className='text-center flex items-center gap-4 justify-center'>Already have account?
                    <Link to={'/logIn'}>
                        <b className='hover:underline hover:text-[#DB4444] transition-all duration-500'>Log in</b>
                    </Link>
                </p>
            </div>
        </div>
    </>)
}