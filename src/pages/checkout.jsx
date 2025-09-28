import React, { useEffect } from 'react'
import {
	TextField,
	Checkbox,
	FormControlLabel,
	Radio,
	RadioGroup,
	Button,
} from '@mui/material'
import { Link } from 'react-router-dom'
import bank1 from '../assets/images/Bkash.png'
import bank2 from '../assets/images/Visa.png'
import bank3 from '../assets/images/Mastercard.png'
import bank4 from '../assets/images/Nagad.png'
import { useDispatch, useSelector } from 'react-redux'
import { getProductFromCart } from '../reducers/cartSlice'

const Checkout = () => {
	const dispatch = useDispatch()
	const { data } = useSelector(state => state.cart)

	useEffect(() => {
		dispatch(getProductFromCart())
	}, [])

	return (
		<div className='mb-[100px]'>
			<div className='lg:px-[135px] px-[25px] lg:py-[70px] py-[30px]'>
                <Link to={'/'}>
                    <p className='text-[gray] hover:text-[black] transition-all duration-500'>Home / <b className='text-[black]'> My account</b></p>
                </Link>
            </div>
			<div className='w-[90%] m-auto flex flex-col md:flex-row md:gap-[40px] lg:gap-[80px] px-4 md:px-10 py-10'>
				<div className='p-[30px] roundad-[8px] shadow-2xl md:w-1/2 flex flex-col gap-5'>
					<h1 className='text-[22px] font-semibold'>Billing Details</h1>
					<TextField
						label='First name'
						variant='outlined'
						fullWidth
						size='small'
					/>
					<TextField
						label='Last name'
						variant='outlined'
						fullWidth
						size='small'
					/>
					<TextField
						label='Street address'
						variant='outlined'
						fullWidth
						size='small'
					/>
					<TextField
						label='Apartment, floor, etc. (optional)'
						variant='outlined'
						fullWidth
						size='small'
					/>
					<TextField
						label='Town/City'
						variant='outlined'
						fullWidth
						size='small'
					/>
					<TextField
						label='Phone number'
						variant='outlined'
						fullWidth
						size='small'
					/>
					<TextField
						label='Email address'
						variant='outlined'
						fullWidth
						size='small'
					/>
					<FormControlLabel
						control={<Checkbox defaultChecked color='error' />}
						label='Save this information for faster check-out next time'
					/>
				</div>
				<div className='p-[30px] md:w-1/2 flex flex-col gap-6'>
					<div className='flex flex-col gap-3'>
						{data?.[0]?.productsInCart?.map(elem => {
							return (
								<div className='flex justify-between items-center'>
									<div className='flex items-center gap-3'>
										<div className='flex justify-between'>
											<div className='flex gap-3 items-center'>
												<img
													className='w-[50px] h-[40px] object-contain'
													src={`https://store-api.softclub.tj/images/${elem.product.image}`}
												/>
												<p>{elem.product.productName}</p>
											</div>
										</div>
										<p>${elem.product.price}</p>
									</div>
								</div>
							)
						})}
					</div>
					<div className='flex justify-between text-[16px]'>
						<p>Subtotal:</p>
						<p>$1750</p>
					</div>
					<div className='flex justify-between text-[16px] border-b pb-2'>
						<p>Shipping:</p>
						<p>Free</p>
					</div>
					<div className='flex justify-between text-[20px] font-semibold'>
						<p>Total:</p>
						<p>$1750</p>
					</div>
					<RadioGroup defaultValue='cash' className='flex flex-col gap-2'>
						<FormControlLabel value='bank' control={<Radio />} label='Bank' />
						<div className='flex gap-[5px] ml-[20px]'>
							<img src={bank1} alt='visa' className='w-[120px] h-[45px]' />
							<img src={bank2} alt='mastercard' className='w-[120px] h-[45px]' />
							<img src={bank3} alt='paypal' className='w-[120px] h-[45px]' />
							<img src={bank4} alt='paypal' className='w-[120px] h-[45px]' />
						</div>
						<FormControlLabel
							value='cash'
							control={<Radio />}
							label='Cash on delivery'
						/>
					</RadioGroup>
					<div className='flex gap-2'>
						<TextField
							placeholder='Coupon Code'
							variant='outlined'
							size='small'
							className='flex-1'
						/>
						<Button variant='outlined' color='error'>
							Apply
						</Button>
					</div>
					<Button
						variant='contained'
						color='error'
						className='w-full md:w-[200px] mt-4'
					>
						Place Order
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Checkout
