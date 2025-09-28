import React from 'react'
import services from "../assets/images/Services.png";
import services1 from "../assets/images/Services (1).png";
import services2 from "../assets/images/Services (2).png";

const Fitches = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-[250px] gap-8 w-full max-w-[1370px] lg:h-[281px] h-auto my-[150px] px-4">
                <div className="flex flex-col justify-center gap-[10px] items-center w-full max-w-[262px] h-[161px]">
                    <img src={services} alt="services" className="w-[80px] h-[80px]" />
                    <p className="text-lg lg:text-[22px] text-[black] font-[600] text-center">FREE AND FAST DELIVERY</p>
                    <p className="text-sm lg:text-[16px] text-[black] text-center">Free delivery for all orders over $140</p>
                </div>
                <div className="flex flex-col justify-center gap-[10px] items-center w-full max-w-[262px] h-[161px]">
                    <img src={services1} alt="services1" className="w-[80px] h-[80px]" />
                    <p className="text-lg lg:text-[22px] text-[black] font-[600] text-center">24/7 CUSTOMER SERVICE</p>
                    <p className="text-sm lg:text-[16px] text-[black] text-center">Friendly 24/7 customer support</p>
                </div>
                <div className="flex flex-col justify-center gap-[10px] items-center w-full max-w-[262px] h-[161px]">
                    <img src={services2} alt="services2" className="w-[80px] h-[80px]" />
                    <p className="text-lg lg:text-[20px] text-[black] font-[600] text-center">MONEY BACK GUARANTEE</p>
                    <p className="text-sm lg:text-[16px] text-[black] text-center">We reurn money within 30 days</p>
                </div>
            </div>
        </div>
    )
}

export default Fitches