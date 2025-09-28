import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    getProductFromCart,
    removeFromCart,
    clearCart
} from "../reducers/cartSlice"
import { Trash2, RotateCcw } from "lucide-react"
import { Link } from "react-router-dom"

const Cart = () => {
    const dispatch = useDispatch()
    const { data, loading } = useSelector((state) => state.cart)
    const [localQuantities, setLocalQuantities] = useState({})

    useEffect(() => {
        dispatch(getProductFromCart())
    }, [dispatch])

    useEffect(() => {
        if (data?.[0]?.productsInCart) {
            const quantities = {}
            data[0].productsInCart.forEach(item => {
                quantities[item.product.id] = item.quantity
            })
            setLocalQuantities(quantities)
        }
    }, [data])

    const cartItems = data?.[0]?.productsInCart || []

    const getTotal = () => {
        return cartItems.reduce(
            (acc, item) => acc + item.product.price * (localQuantities[item.product.id] || item.quantity),
            0
        )
    }

    const handleQuantityChange = (productId, newQuantity) => {
        if (newQuantity < 1) return;
        setLocalQuantities(prev => ({
            ...prev,
            [productId]: newQuantity
        }))
    }

    if (loading) {
        return <p className="text-center py-10">Loading...</p>
    }

    return (
        <div className="lg:px-[100px] px-[20px] lg:py-[60px] py-[30px]">
            <Link to={"/"}>
                <p className="text-black hover:text-gray-600">
                    Home / <b>Cart</b>
                </p>
            </Link>

            <div className="mt-10">
                <div className="hidden lg:grid grid-cols-4 text-lg font-semibold border-b pb-4">
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>

                {cartItems.map((item) => (
                    <div
                        key={item.product.id}
                        className="grid lg:grid-cols-4 grid-cols-2 items-center gap-4 border-b py-6 relative"
                    >
                        <div className="flex items-center gap-4 col-span-2 lg:col-span-1">
                            <img
                                src={`http://37.27.29.18:8002/images/${item.product.image}`}
                                alt={item.product.productName}
                                className="w-[80px] h-[80px] object-cover rounded"
                            />
                            <p>{item.product.productName}</p>
                        </div>
                        <p className="font-medium">${item.product.price}</p>
                        <div className="flex items-center">
                            <button
                                onClick={() => handleQuantityChange(item.product.id, (localQuantities[item.product.id] || item.quantity) - 1)}
                                className="border px-3 py-1 rounded-l"
                            >
                                -
                            </button>
                            <span className="border-y px-3 py-1 min-w-[50px] text-center">
                                {localQuantities[item.product.id] || item.quantity}
                            </span>
                            <button
                                onClick={() => handleQuantityChange(item.product.id, (localQuantities[item.product.id] || item.quantity) + 1)}
                                className="border px-3 py-1 rounded-r"
                            >
                                +
                            </button>
                        </div>
                        <p className="font-medium">
                            ${item.product.price * (localQuantities[item.product.id] || item.quantity)}
                        </p>
                        <button
                            onClick={() => dispatch(removeFromCart(item.product.id))}
                            className="absolute right-4 text-red-500"
                        >
                            <Trash2 />
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap justify-between gap-4 mt-8">
                <Link
                    to="/"
                    className="border px-6 py-3 rounded hover:bg-gray-100"
                >
                    Return To Shop
                </Link>
                <div className="flex gap-3">
                    <button
                        className="border px-6 py-3 rounded flex items-center gap-2 hover:bg-gray-100"
                        onClick={() => dispatch(getProductFromCart())}
                    >
                        <RotateCcw size={18} /> Update Cart
                    </button>
                    <button
                        onClick={() => dispatch(clearCart())}
                        className="border px-6 py-3 rounded text-red-500 hover:bg-red-500 hover:text-white transition"
                    >
                        Remove all
                    </button>
                </div>
            </div>

            <div className="flex gap-3 mt-8">
                <input
                    type="text"
                    placeholder="Coupon Code"
                    className="border px-4 py-3 w-[250px] rounded"
                />
                <button className="border border-red-500 text-red-500 px-6 py-3 rounded hover:bg-red-500 hover:text-white transition">
                    Apply
                </button>
            </div>

            <div className="border p-6 mt-10 w-[350px] ml-auto">
                <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
                <div className="flex justify-between mb-2">
                    <p>Subtotal:</p>
                    <p>${getTotal()}</p>
                </div>
                <div className="flex justify-between mb-4">
                    <p>Shipping:</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between font-bold text-lg">
                    <p>Total:</p>
                    <p>${getTotal()}</p>
                </div>
                <Link to={"/checkout"}>
                    <button className="bg-red-500 text-white px-6 py-3 rounded w-full mt-6 hover:bg-red-600 transition">
                        Proceed to checkout
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Cart