import { createSlice } from "@reduxjs/toolkit"

export const cart = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const existingProduct = state.items.find((item) => item.id === action.payload.id)

      if(existingProduct) {
        existingProduct.quantity +=1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      //spread operator to mutate the object
      }      
    },
    removeItem: (state, action) => {
        const existingProduct = state.items.find((item) => item.id === action.payload.id)

      if(existingProduct.quantity === 1) {
        const productToDelete = state.items.indexOf(existingProduct)
        state.items.splice(productToDelete, 1)
        //state.items = state.items.filter((item) => item.id !== action.payload.id)
      } else {
        existingProduct.quantity -=1
      } 
    },
    removeAll: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    }
  }
})