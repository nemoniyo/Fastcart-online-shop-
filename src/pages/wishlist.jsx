import React from "react";
import Product from "../components/product";
import redLine from "../assets/images/redLine.png";
import { Eye, ShoppingCart, Trash2 } from "lucide-react";
import stars from "../assets/images/Five star.png";
import { Link } from "react-router-dom";
import skidka from "../assets/images/Discount percent.png";

export default function Wishlist({ wish, setWish }) {

    return (<>
        <div>
            <div className="flex lg:justify-between flex-wrap gap-[15px] lg:px-[80px] items-center lg:pl-[80px] pl-[20px] lg:py-[40px] py-[20px]">
                <p className="text-[28px] font-[600]">Wishlist</p>
                <button className='w-[350px] h-[56px] border-[1px] border-black hover:border-none rounded-[4px] bg-[transparent] hover:bg-[crimson] transition-all duration-500 text-[18px] text-[black] hover:text-[whitesmoke]'>Move All To Bag</button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 py-[50px]">
                {wish?.slice(0, 5)?.map(el => (
                    <div
                        key={el.id}
                        className="border hoverArticle border-[whitesmoke] shadow-lg p-[20px] relative"
                    >
                        <img
                            src={`https://store-api.softclub.tj/images/${el.image}`}
                            alt={el.productName}
                            className="w-[280px] h-[270px] object-cover"
                            onError={e => {
                                e.target.src = '/default-product.png'
                            }}
                        />
                        <div className="hoverAdd absolute flex items-center justify-center w-[280px] top-[18px] transition-all duration-500 z-20">
                            <button
                                onClick={() => {
                                    console.log("Add to cart", el.id)
                                }}
                                className="bg-[transparent] hover:backdrop-blur-2xl hover:text-[whitesmoke] cursor-pointer h-[360px] w-full transition-all duration-500 text-[transparent] py-[10px] text-center text-[20px] rounded"
                            >
                                <div className="flex flex-col justify-center items-center gap-[10px]">
                                    <ShoppingCart className="w-20 h-20" />
                                    <div className="text-[28px] font-[600]">Add to cart</div>
                                </div>
                            </button>
                        </div>
                        <h1 className="text-[20px] font-[500]">{el.productName}</h1>
                        <div className="flex gap-[15px] items-center text-[18px] font-[500]">
                            <p>${el.price}</p>
                            <p className="text-[brown] line-through">$160</p>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <img src={stars} alt="stars" className="w-[100px] h-[20px]" />
                            <p className="text-[18px] text-[grey] font-[400]">
                                ({el.quantity})
                            </p>
                        </div>
                        <button
                            className="absolute cursor-pointer top-[30px] left-[250px] bg-white w-[40px] h-[40px] rounded-[50%] flex items-center justify-center z-20 hover:scale-110 transition-all duration-300"
                            onClick={() => {
                                const update = wish.filter(v => v.id !== el.id)
                                localStorage.setItem("wish", JSON.stringify(update))
                                setWish(update)
                            }}
                        >
                            <Trash2 className="text-red-500" />
                        </button>
                        <Link to={`info/${el.id}`}>
                            <button className="absolute top-[80px] cursor-pointer left-[250px] bg-[white] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center z-20">
                                <Eye />
                            </button>
                        </Link>
                        <div className="absolute left-[30px] top-[30px]">
                            <img src={skidka} alt="skidka" className="w-[55px] h-[26px]" />
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <div className="flex gap-[30px] items-center lg:pl-[80px] pl-[20px] lg:py-[40px] py-[20px]">
                    <img src={redLine} alt="redLine" className="w-[20px] h-[40px]" />
                    <p className="text-[28px] font-[600]">Just For You</p>
                </div>
                <Product wish={wish} setWish={setWish} />
            </div>
        </div>
    </>)
}