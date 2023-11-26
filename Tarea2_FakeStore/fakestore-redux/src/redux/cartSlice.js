import { createSlice } from '@reduxjs/toolkit';

const initialState = {
products: [],
totalProducts: 0,

};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.products = [...state.products, action.payload];
            state.totalProducts = state.products.length;
            //state.products.push(action.payload);
            //state.totalProducts += 1;
        },
        removeFromCart: (state, action) => {
            //state.totalProducts -= 1;
            state.products = state.products.filter(product => product.id !== action.payload);
            state.totalProducts = state.products.length;
            //state.products = state.products.filter(item => item.id !== action.payload);
            
        },
        clearCart: (state) => {
            state.products = [];
            state.totalProducts = 0;
          },
    }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;