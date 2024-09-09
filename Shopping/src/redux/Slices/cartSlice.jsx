import { createSlice } from "@reduxjs/toolkit";



export const CartSlice = createSlice({
  name: "cart",
  initialState:[],     // cart ki value starting me blank hogi
  reducers: {
    add: (state, action) => { // Add product to cart   
      state.push(action.payload);      // kisi input value ko payoad se access kr skte hai
    },
    remove: (state, action) => {  // Remove product by id 
      return state.filter(item => item.id !== action.payload);  // kisi input value ko payload se access kr skte hai
    }
  }
});

export const { add, remove } = CartSlice.actions;

export default CartSlice.reducer;
