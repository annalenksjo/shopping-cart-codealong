import { createSlice } from "@reduxjs/toolkit"

const productData = [
  { id: 1, title: "Socks", price: 100, emoji:"🧦" },
  { id: 2, title: "T-shirt", price: 200, emoji:"👕" },
  { id: 3, title: "Pants", price: 350, emoji:"👖" },
  { id: 4, title: "Dress", price: 550, emoji:"👗" }
]

export const products = createSlice({
  name: "products",
  initialState: productData
})

// ide att lägga till en store här så att det går att lägga till tillgängliga varor