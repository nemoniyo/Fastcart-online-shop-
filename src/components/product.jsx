import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCategory, getData } from "../reducers/todoSlice";
import stars from "../assets/images/Five star.png";
import skidka from "../assets/images/Discount percent.png";
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Eye } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { postCart } from '../reducers/cartSlice';

export default function Product({ wish, setWish }) {
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
            <div className="flex gap-[40px] flex-wrap justify-center mb-[100px]">
                {data?.data?.products.slice(0, 4).map((element) => {
                    const isLiked = likedProductIds.includes(element.id);

                    const id = wish.find(e => e.id === element.id)
                    const handleHeartClick = () => {
                        if (!id) {
                            const sokhran = [...wish, element]
                            localStorage.setItem('wish', JSON.stringify(sokhran))
                            setWish(sokhran)
                        } else {
                            const update = wish.filter(v => v.id !== element.id)
                            localStorage.setItem('wish', JSON.stringify(update))
                            setWish(update)
                        }
                    }

                    return (
                        <div key={element.id} className="border hoverArticle border-[whitesmoke] shadow-lg p-[20px] relative">
                            <img src={`http://37.27.29.18:8002/images/${element.image}`} alt="Image product" className="w-[280px] h-[270px] object-cover" />
                            <div className='hoverAdd absolute flex items-center justify-center w-[280px] top-[18px] transition-all duration-500 z-20'>
                                <button onClick={() => dispatch(postCart(element.id))} className='bg-[transparent] hover:backdrop-blur-2xl hover:text-[whitesmoke] cursor-pointer h-[360px] w-full transition-all duration-500 text-[transparent] py-[10px] text-center text-[20px] rounded'>
                                    <div className='flex flex-col justify-center items-center gap-[10px]'>
                                        <ShoppingCart className='w-20 h-20' />
                                        <div className='text-[28px] font-[600]'>
                                            Add to cart
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <h1 className="text-[20px] font-[500]">{element.productName}</h1>
                            <div className="flex gap-[15px] items-center text-[18px] font-[500]">
                                <p>{element.price}</p>
                                <p className="text-[brown]">{element.discountPrice}</p>
                            </div>
                            <div className="flex gap-[10px] items-center">
                                <img src={stars} alt="stars" className="w-[100px] h-[20px]" />
                                <p className="text-[18px] text-[grey] font-[400]">{`(${element.quantity})`}</p>
                            </div>
                            <button
                                className={`
                                absolute cursor-pointer top-[30px] left-[250px] 
                                bg-white w-[40px] h-[40px] rounded-[50%] 
                                flex items-center justify-center z-20
                                transition-all duration-300 ease-in-out
                                hover:scale-110
                                ${isLiked
                                        ? 'text-red-500 shadow-lg'
                                        : 'text-gray-500 hover:text-red-400'
                                    }
                                `}
                                onClick={() => handleLikeClick(element.id)}
                            >
                                <Heart onClick={handleHeartClick}
                                    className={`
                                transition-all duration-300
                                ${isLiked ? 'fill-red-500 scale-110' : ''}
                                `}
                                />
                            </button>
                            <Link to={`info/${element.id}`}>
                                <button className="absolute top-[80px] cursor-pointer left-[250px] bg-[white] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center z-20">
                                    <Eye />
                                </button>
                            </Link>
                            <div className="absolute left-[30px] top-[30px]">
                                <img src={skidka} alt="skidka" className="w-[55px] h-[26px]" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>)
}