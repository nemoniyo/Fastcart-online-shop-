import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API } from "../utils/config"

export const postCart = createAsyncThunk("cart/postCart", async (id) => {
    const { data } = await API.post(`/Cart/add-product-to-cart?id=${id}`)
    return data.data
})

export const getProductFromCart = createAsyncThunk("cart/getProductFromCart", async () => {
    const { data } = await API.get("/Cart/get-products-from-cart")
    return data.data
})

export const removeFromCart = createAsyncThunk("cart/removeFromCart", async (id) => {
    const { data } = await API.delete(`/Cart/delete-product-from-cart?id=${id}`)
    return data.data
})

export const clearCart = createAsyncThunk("cart/clearCart", async () => {
    const { data } = await API.delete("/Cart/clear-cart")
    return data.data
})

const initialState = {
    data: [],
    loading: false,
    error: null,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductFromCart.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getProductFromCart.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(getProductFromCart.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            .addCase(removeFromCart.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(clearCart.fulfilled, (state, action) => {
                state.data = action.payload
            })

            .addCase(postCart.fulfilled, (state, action) => {
                state.data = action.payload
            })
    },
})

export default cartSlice.reducer
