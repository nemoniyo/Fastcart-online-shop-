import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoFastcart from "../assets/images/fastcart.logo.png";
import { Heart, Search, ShoppingCart, User, Menu, ShoppingBag, LogOut } from "lucide-react";
import { Drawer, Button } from "antd";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [openDrop, setOpenDrop] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <nav className="flex items-center justify-between lg:justify-center lg:gap-[220px] p-4 lg:p-[20px] border-b-[1px] border-gray-300 shadow-sm relative">
                <div className="lg:hidden">
                    <Button type="text" onClick={showDrawer}>
                        <Menu size={24} />
                    </Button>
                </div>

                <img
                    src={LogoFastcart}
                    alt="LogoFastcart"
                    className="w-[140px] lg:w-[180px] h-[40px] lg:h-[50px]"
                />

                <ul className="hidden lg:flex gap-[45px] text-[18px] items-center">
                    <Link to={"/"}>
                        <li className="hover:underline">Home</li>
                    </Link>
                    <Link to={"/contact"}>
                        <li className="hover:underline">Contact</li>
                    </Link>
                    <Link to={"/about"}>
                        <li className="hover:underline">About</li>
                    </Link>
                    <Link to={"/logIn"}>
                        <li className="hover:underline">Log In</li>
                    </Link>
                </ul>

                <div className="flex gap-4 lg:gap-[30px] items-center relative">
                    <div className="hidden lg:flex items-center bg-gray-300 w-[255px] h-[45px] gap-[12px] p-[5px] pl-[18px] rounded-[4px]">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="outline-none placeholder:text-[gray] bg-transparent w-full"
                        />
                        <Search />
                    </div>

                    <div className="lg:hidden">
                        <Search size={20} />
                    </div>

                    <Link to={"/wishlist"}>
                        <Heart size={20} className="lg:w-auto" />
                    </Link>
                    <Link to={"/cart"}>
                        <ShoppingCart size={20} className="lg:w-auto" />
                    </Link>

                    {/* Кнопка профиля */}
                    <div className="relative">
                        <button onClick={() => setOpenDrop(!openDrop)}>
                            <User size={20} className="lg:w-auto" />
                        </button>

                        {openDrop && (
                            <div className="absolute right-0 mt-2 w-48 bg-[#2E2E2E] text-white rounded-md shadow-lg p-2 border border-purple-500">
                                <ul className="flex flex-col gap-2">
                                    <Link to={'/account'}>
                                        <li className="flex items-center gap-2 px-2 py-2 hover:bg-gray-700 rounded cursor-pointer">
                                            <User size={18} />
                                            <span>Account</span>
                                        </li>
                                    </Link>
                                    <Link to={"/cart"}>
                                        <li className="flex items-center gap-2 px-2 py-2 hover:bg-gray-700 rounded cursor-pointer">
                                            <ShoppingBag size={18} />
                                            <span>My Order</span>
                                        </li>
                                    </Link>
                                    <Link to={"/wishlist"}>
                                        <li className="flex items-center gap-2 px-2 py-2 hover:bg-gray-700 rounded cursor-pointer">
                                            <Heart size={18} />
                                            <span>Wishlist</span>
                                        </li>
                                    </Link>
                                    <Link to={"/logIn"}>
                                        <li className="flex items-center gap-2 px-2 py-2 hover:bg-gray-700 rounded cursor-pointer">
                                            <LogOut size={18} />
                                            <span>Logout</span>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Drawer для мобильного меню */}
                <Drawer
                    title="Menu"
                    placement="left"
                    onClose={onClose}
                    open={open}
                    width={280}
                >
                    <div className="flex flex-col gap-6">
                        <Link to={"/"} onClick={onClose}>
                            <div className="text-lg hover:text-blue-600">Home</div>
                        </Link>
                        <Link to={"/contact"} onClick={onClose}>
                            <div className="text-lg hover:text-blue-600">Contact</div>
                        </Link>
                        <Link to={"/about"} onClick={onClose}>
                            <div className="text-lg hover:text-blue-600">About</div>
                        </Link>
                        <Link to={"/logIn"} onClick={onClose}>
                            <div className="text-lg hover:text-blue-600">Log In</div>
                        </Link>
                    </div>
                </Drawer>
            </nav>
        </>
    );
}
