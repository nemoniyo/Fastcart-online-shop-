import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { API } from '../utils/config';
import axios from 'axios';

export const getData = createAsyncThunk("counter/getData", async () => {
    try {
        const { data } = await API.get("Product/get-products");
        return data;
    } catch (error) {
        console.error(error);
    }
});

export const getCategory = createAsyncThunk("counter/getCategory", async () => {
    try {
        const { data } = await API.get('Category/get-categories');
        return data;
    } catch (error) {
        console.error(error);
    }
});

export const productById = createAsyncThunk(
    'productData/productById',
    async (id) => {
        try {
            const { data } = await axios.get(`https://store-api.softclub.tj/Product/get-product-by-id?id=${id}`)
            return data.data
        } catch (error) {
            console.error(error)
        }
    }
)

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        data: [],
        loading: false,
        category: [],
        productData: [],
        productDataById: [],
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getData.pending, state => {
            state.loading = true;
        })
            .addCase(getData.fulfilled, (state, { payload }) => {
                state.loading = false
                state.data = payload
            })
            .addCase(getCategory.fulfilled, (state, { payload }) => {
                state.loading = false
                state.category = payload
            })
            .addCase(productById.fulfilled, (state, action) => {
                state.productDataById = action.payload
            })
}
})


export default counterSlice.reducer