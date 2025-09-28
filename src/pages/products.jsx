import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/product"
export default function Products({ wish, setWish }) {
    return (<>
        <div>
            <div className='lg:px-[135px] px-[25px] lg:py-[90px] py-[30px]'>
                <Link to={'/'}>
                    <p className='text-[gray] hover:text-[black] transition-all duration-500'>Home / <b className='text-[black]'> Explore Our Products</b></p>
                </Link>
            </div>
            <div>
                <Product wish={wish} setWish={setWish} />
                <Product wish={wish} setWish={setWish} />
                <Product wish={wish} setWish={setWish} />
                <Product wish={wish} setWish={setWish} />
                <Product wish={wish} setWish={setWish} />
                <Product wish={wish} setWish={setWish} />
            </div>
        </div>
    </>)
}