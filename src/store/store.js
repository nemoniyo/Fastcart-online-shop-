import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../reducers/todoSlice';
import cartSlice from '../reducers/cartSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        cart: cartSlice
    },
})