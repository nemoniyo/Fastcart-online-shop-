import React from "react";
import { Link } from "react-router-dom";

import { API } from "../utils/config";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
    let navigate = useNavigate();
    async function login(userName, password) {
        const res = await API.post("Account/login", { userName, password });
        if (res.data.data) {
            localStorage.setItem("accessToken", res.data.data);
            navigate("/");
        }
    };

    const handlesubmit = (e) => {
        e.preventDefault();
        let userName = e.target["userName"].value;
        let password = e.target["password"].value;
        login(userName, password);
    };

    return (<>
        <div>
            <div className='flex justify-center lg:pt-[300px] pt-[70px] lg:pb-[250px] pb-[70px]'>
                <div className='flex flex-col gap-[20px]'>
                    <h1 className='text-[32px] font-[600]'>Log in to Exclusive</h1>
                    <p className='text-[16px] font-[400]'>Enter your details below</p>
                    <form onSubmit={handlesubmit} className='flex flex-col gap-[20px]'>
                        <input type="text" name='userName' placeholder='Email or phone number' className='w-[360px] h-[45px] p-[5px] px-[15px] rounded-[4px] border-[1px] border-gray-300  placeholder:text-[gray] outline-none focus:ring-1 focus:ring-[crimson] focus:border focus:border-[#DB4444] transition-all duration-500' />
                        <input type="password" name='password' placeholder='Password' className='w-[360px] h-[45px] p-[5px] px-[15px] rounded-[4px] border-[1px] border-gray-300  placeholder:text-[gray] outline-none focus:ring-1 focus:ring-[crimson] focus:border focus:border-[#DB4444] transition-all duration-500' />
                        <button type='submit' className='w-[360px] h-[45px] bg-[#DB4444] hover:bg-[crimson] transition-all duration-500 text-[18px] font-[500] text-[whitesmoke] rounded-[4px]'>Log in</button>
                    </form>
                            <Link to={"/signup"}>
                                <button className='w-[360px] h-[30px] hover:underline hover:text-[crimson] transition-all duration-500 text-[#DB4444] text-[20px] font-[500]'>Dont have account?</button>
                            </Link>
                </div>
            </div>
        </div>
    </>)
}