import React from "react";
import { Facebook, Instagram, Twitter } from 'lucide-react';
import services3 from "../assets/images/Services (3).png";
import services4 from "../assets/images/Services (4).png";
import services5 from "../assets/images/Services (5).png";
import services6 from "../assets/images/Services (6).png";
import aboutIM from "../assets/images/aboutImage.png";
import aboutIM1 from "../assets/images/aboutImage1.png";
import aboutIM2 from "../assets/images/aboutImage2.png";
import aboutIM3 from "../assets/images/aboutImage3.png";
import { Link } from "react-router-dom";
import Fitches from "../components/fitches";

export default function About() {
    return (<>
        <div>
            <div>
                <div className='lg:px-[100px] px-[35px] lg:py-[60px] py-[45px]'>
                    <Link to={'/'}>
                        <p className='text-black hover:text-[black] transition-all duration-500'>Home / <b className='text-[black]'> About</b></p>
                    </Link>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-[150px] gap-8 pb-[100px] px-4'>
                    <aside className='flex flex-col gap-[30px] max-w-full lg:max-w-[500px]'>
                        <h1 className='text-4xl lg:text-[64px] text-[black] font-[600] leading-tight'>Our Story</h1>
                        <p className='text-base lg:text-[18px] text-[black] font-[400] leading-relaxed'>
                            Launced in 2015, Exclusive is South Asia's premier online shopping 
                            makterplace with an active presense in Bangladesh. Supported 
                            by wide range of tailored marketing, data and service solutions, 
                            Exclusive has 10,500 sallers and 300 brands and serves 3 
                            millioons customers across the region.
                        </p>
                        <p className='text-base lg:text-[18px] text-[black] font-[400] leading-relaxed'>
                            Exclusive has more than 1 Million products to offer, growing at a 
                            very fast. Exclusive offers a diverse assotment in categories 
                            ranging from consumer.
                        </p>
                    </aside>
                    <div className="flex justify-center">
                        <img src={aboutIM} alt="aboutIM" className='w-full max-w-[570px] h-auto lg:h-[415px] object-cover' />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-[85px] gap-8 lg:h-auto py-8 lg:py-0 px-4 text-[black]'>
                    <div className='w-full max-w-[270px] h-[230px] border-[2px] border-gray-400 rounded-[4px] flex flex-col justify-center items-center hover:bg-[#DB4444] hover:text-[whitesmoke] transition-all duration-500'>
                        <img src={services3} alt="services3" className='w-[80px] h-[80px]' />
                        <h1 className='text-[38px] font-[700]'>10.5k</h1>
                        <p className='text-[18px] font-[500] text-center px-2'>Sallers active our site</p>
                    </div>
                    <div className='w-full max-w-[270px] h-[230px] border-[2px] border-gray-400 rounded-[4px] flex flex-col justify-center items-center hover:bg-[#DB4444] hover:text-[whitesmoke] transition-all duration-500'>
                        <img src={services4} alt="services4" className='w-[80px] h-[80px]' />
                        <h1 className='text-[38px] font-[700]'>33k</h1>
                        <p className='text-[18px] font-[500] text-center px-2'>Mopnthly Produduct Sale</p>
                    </div>
                    <div className='w-full max-w-[270px] h-[230px] border-[2px] border-gray-400 rounded-[4px] flex flex-col justify-center items-center hover:bg-[#DB4444] hover:text-[whitesmoke] transition-all duration-500'>
                        <img src={services5} alt="services5" className='w-[80px] h-[80px]' />
                        <h1 className='text-[38px] font-[700]'>45.5k</h1>
                        <p className='text-[18px] font-[500] text-center px-2'>Customer active in our site</p>
                    </div>
                    <div className='w-full max-w-[270px] h-[230px] border-[2px] border-gray-400 rounded-[4px] flex flex-col justify-center items-center hover:bg-[#DB4444] hover:text-[whitesmoke] transition-all duration-500'>
                        <img src={services6} alt="services6" className='w-[80px] h-[80px]' />
                        <h1 className='text-[38px] font-[700]'>25k</h1>
                        <p className='text-[18px] font-[500] text-center px-2'>Anual gross sale in our site</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-[60px] gap-8 py-[100px] px-4'>
                    <div className='flex flex-col gap-[15px] border-[2px] border-[white] p-[15px] max-w-[370px] w-full'>
                        <img src={aboutIM1} alt="aboutIM1" className='w-full h-auto max-h-[430px] object-cover' />
                        <h1 className='text-2xl lg:text-[36px] font-[500]'>Tom Cruise</h1>
                        <p className='text-base lg:text-[18px] font-[400]'>Founder & Chairman</p>
                        <div className='flex gap-[20px]'>
                            <Twitter size={24} />
                            <Instagram size={24} />
                            <Facebook size={24} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[15px] border-[2px] border-[white] p-[15px] max-w-[370px] w-full'>
                        <img src={aboutIM2} alt="aboutIM2" className='w-full h-auto max-h-[430px] object-cover' />
                        <h1 className='text-2xl lg:text-[36px] font-[500]'>Emma Watson</h1>
                        <p className='text-base lg:text-[18px] font-[400]'>Managing Director</p>
                        <div className='flex gap-[20px]'>
                            <Twitter size={24} />
                            <Instagram size={24} />
                            <Facebook size={24} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[15px] border-[2px] border-[white] p-[15px] max-w-[370px] w-full'>
                        <img src={aboutIM3} alt="aboutIM3" className='w-full h-auto max-h-[430px] object-cover' />
                        <h1 className='text-2xl lg:text-[36px] font-[500]'>Will Smith</h1>
                        <p className='text-base lg:text-[18px] font-[400]'>Product Designer</p>
                        <div className='flex gap-[20px]'>
                            <Twitter size={24} />
                            <Instagram size={24} />
                            <Facebook size={24} />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center px-4'>
                    <Fitches />
                </div>
            </div>
        </div>
    </>)
}