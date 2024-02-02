import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = 'https://fakestoreapi.com/products';

const initialState = {
    products: [],
    categories:[],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get(POSTS_URL)
    return response.data
})



const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';

                state.products = action.payload;
                
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            
    }
})

export const selectAllProducts = (state) => state.products.products;
export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;


export default productsSlice.reducer