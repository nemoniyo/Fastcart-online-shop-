import React from "react";
import { Facebook, Instagram, Linkedin, SendHorizontal, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-[80px] pt-[60px] pb-[40px] px-6 md:px-16 lg:px-24">
                
                <div className="flex flex-col gap-4">
                    <ul className="flex flex-col gap-2">
                        <li className="text-[20px] font-[500]">Exclusive</li>
                        <li className="text-[18px] font-[500]">Subscribe</li>
                        <li className="text-[16px] font-[400]">Get 10% off your first order</li>
                    </ul>
                    <div className="w-full max-w-[250px] h-[40px] rounded-[4px] flex justify-between items-center gap-2 border-2 border-white px-2">
                        <input 
                            type="text" 
                            placeholder="Enter your email" 
                            className="flex-1 bg-transparent text-sm placeholder:text-gray-400 outline-none"
                        />
                        <SendHorizontal />
                    </div>
                </div>

                <div>
                    <ul className="flex flex-col gap-3 text-[16px]">
                        <li className="text-[20px] font-[500]">Support</li>
                        <li>111 Bijoy sarani, Dhaka,<br />DH 1515, Bangladesh.</li>
                        <li>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                </div>

                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <ul className="flex flex-col gap-2 text-[16px]">
                            <li className="text-[20px] font-[500]">Account</li>
                            <li>My Account</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-2 text-[16px]">
                            <li className="text-[20px] font-[500]">Quick Link</li>
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="col-span-2">
                        <p className="text-[20px] font-[500]">Social</p>
                        <div className="flex gap-4 mt-3">
                            <Facebook />
                            <Twitter />
                            <Instagram />
                            <Linkedin />
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-[14px] md:text-[16px] font-[500] text-center text-gray-500 pb-[30px]">
                © Copyright Rimel 2022. All right reserved
            </p>
        </footer>
    );
}
