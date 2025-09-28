import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import Banner from "../components/banner";
import redLine from "../assets/images/redLine.png";
import CountdownTimer from "../components/count-dawn-timer";
import BannerTwo from "../components/banner-two";
import Fitches from "../components/fitches";
import BannerThree from "../components/banner-trhee";
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getData } from "../reducers/todoSlice";
import Product from "../components/product";
import { Link } from "react-router-dom";
import stars from "../assets/images/Five star.png";
import skidka from "../assets/images/Discount percent.png";
import { Heart } from 'lucide-react';
import { Eye } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


export default function Home({ wish, setWish }) {
    const dispatch = useDispatch();
    const { data, category } = useSelector((state) => state.counter);
    const [likedProductIds, setLikedProductIds] = useState([]);


    useEffect(() => {
        dispatch(getData())
        dispatch(getCategory())
    }, [dispatch]);

    const handleLikeClick = (productId) => {
        setLikedProductIds(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    return (<>
        <div>
            <div className="flex flex-col lg:flex-row pl-4 lg:pl-[150px] h-auto lg:h-[700px]">
                <div className="w-full lg:w-[250px] h-auto lg:h-[530px] border-b-[1px] lg:border-b-0 lg:border-r-3 border-gray-300 pt-8 lg:pt-[50px] pb-8 lg:pb-0">
                    <Link to={"/products"}>
                        <ul className="text-[16px] lg:text-[20px] font-[500] flex flex-row lg:flex-col gap-4 lg:gap-[20px] overflow-x-auto lg:overflow-visible">
                            <li className="hover:text-[#DB4444] transition-all duration-500 whitespace-nowrap">Woman’s Fashion</li>
                            <li className="hover:text-[#DB4444] transition-all duration-500 whitespace-nowrap">Men’s Fashion</li>
                            <li className="hover:text-[#DB4444] transition-all duration-500 whitespace-nowrap">Electronics</li>
                            <li className="hover:text-[#DB4444] transition-all duration-500 whitespace-nowrap">Home & Lifestyle</li>
                            <li className="hover:text-[#DB4444] transition-all duration-500 whitespace-nowrap">Medicine</li>
                            <li className="hover:text-[#DB4444] transition-all duration-500 whitespace-nowrap">Sports & Outdoor</li>
                            <li className="hover:text-[#DB4444] transition-all duration-500 whitespace-nowrap">Baby’s & Toys</li>
                            <li className="hover:text-[#DB4444] transition-all duration-500 whitespace-nowrap">Groceries & Pets</li>
                            <li className="hover:text-[#DB4444] transition-all duration-500 whitespace-nowrap">Health & Beauty</li>
                        </ul>
                    </Link>
                </div>
                <div className="w-full lg:w-auto lg:block hidden">
                    <Carousel autoplay className="w-full lg:w-[1050px] h-[300px] lg:h-[450px]">
                        <Banner />
                        <Banner />
                        <Banner />
                        <Banner />
                        <Banner />
                    </Carousel>
                </div>
            </div>
            <div className="flex gap-[30px] items-center lg:pl-[80px] pl-[20px] lg:py-[40px] py-[20px]">
                <img src={redLine} alt="redLine" className="w-[20px] h-[40px]" />
                <p className="text-[18px] font-[600] text-[#DB4444]">Today's</p>
            </div>
            <div className="h-[150px] flex items-center gap-[100px] max-md:flex-col max-md:h-auto max-md:gap-[30px] max-md:py-[40px]">
                <h1 className="text-[38px] font-[600] lg:pl-[80px] max-md:text-[28px] max-md:pl-0">Flash Sales</h1>
                <CountdownTimer />
            </div>
            <div>
                <Product wish={wish} setWish={setWish} />
            </div>
            <div className="flex gap-[30px] items-center lg:pl-[80px] pl-[20px] lg:py-[40px] py-[20px]">
                <img src={redLine} alt="redLine" className="w-[20px] h-[40px]" />
                <p className="text-[18px] font-[600] text-[#DB4444]">Categories</p>
            </div>
            <div className="h-[150px] flex items-center gap-[100px] max-md:flex-col max-md:h-auto max-md:gap-[30px] max-md:py-[40px]">
                <h1 className="text-[38px] font-[600] lg:pl-[80px] max-md:text-[28px] max-md:pl-0">Browse By Category</h1>
            </div>
            <div>
                <div className='w-[80%] m-auto'>
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={6}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.5,
                                spaceBetween: 30,
                            },
                            640: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 6,
                            },
                        }}
                        className='mySwiper mt-10'
                    >
                        <div className=''>
                            {Array.isArray(category) && category.map((element) => (
                                <SwiperSlide key={element.id}>
                                    <div className='p-[40px] border-[2px] border-gray-300 text-center rounded-[5px] px-[5px] hover:bg-[#DB4444] hover:border-none'>
                                        {element.categoryImage && (
                                            <img
                                                src={`https://store-api.softclub.tj/images/${element.categoryImage}`}
                                                alt={element.categoryName}
                                                className='mx-auto dark:invert '
                                            />
                                        )}
                                        <p className='pt-[10px]'>{element.categoryName}</p>
                                    </div>
                                </SwiperSlide>
                            ))}

                        </div>
                    </Swiper>
                </div>
            </div>


            <div className="flex gap-[30px] items-center lg:pl-[80px] pl-[20px] lg:py-[40px] py-[20px]">
                <img src={redLine} alt="redLine" className="w-[20px] h-[40px]" />
                <p className="text-[18px] font-[600] text-[#DB4444]">This Month</p>
            </div>
            <div className="h-[150px] flex items-center gap-[100px] max-md:flex-col max-md:h-auto max-md:gap-[30px] max-md:py-[40px]">
                <h1 className="text-[38px] font-[600] lg:pl-[80px] max-md:text-[28px] max-md:pl-0">Best Selling Products</h1>
            </div>
            <div>
                <Product wish={wish} setWish={setWish} />
            </div>
            <div className="flex justify-center">
                <BannerTwo />
            </div>
            <div className="flex gap-[30px] items-center lg:pl-[80px] pl-[20px] lg:py-[40px] py-[20px]">
                <img src={redLine} alt="redLine" className="w-[20px] h-[40px]" />
                <p className="text-[18px] font-[600] text-[#DB4444]">Our Products</p>
            </div>
            <div className="h-[150px] flex items-center gap-[100px] max-md:flex-col max-md:h-auto max-md:gap-[30px] max-md:py-[40px]">
                <h1 className="text-[38px] font-[600] lg:pl-[80px] max-md:text-[28px] max-md:pl-0">Explore Our Products</h1>
            </div>
            <div>
                <Product wish={wish} setWish={setWish} />
                <Product wish={wish} setWish={setWish} />
            </div>
            <div className="flex justify-center h-[100px] items-center mt-[50px]">
                <Link to={"/products"}>
                    <button className='w-[350px] h-[56px] rounded-[4px] bg-[#DB4444] hover:bg-[crimson] transition-all duration-500 text-[18px] text-[whitesmoke]'>View All Products</button>
                </Link>
            </div>
            <div className="flex gap-[30px] items-center lg:pl-[80px] pl-[20px] lg:py-[40px] py-[20px]">
                <img src={redLine} alt="redLine" className="w-[20px] h-[40px]" />
                <p className="text-[18px] font-[600] text-[#DB4444]">New Arrival</p>
            </div>
            <div className="flex justify-center">
                <BannerThree />
            </div>
            <div className="flex justify-center">
                <Fitches />
            </div>
        </div>
    </>)
}