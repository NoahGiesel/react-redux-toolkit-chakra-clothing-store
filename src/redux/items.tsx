import { createSlice } from "@reduxjs/toolkit";


 
const itemList  =  { 
    items:[
    { 
      title: "Red Pullover", 
      color: "red",
      price: 29.99,
      stars: 4,
      reviews: 123,
      quantity: 1,
      img: "https://images.pexels.com/photos/5696781/pexels-photo-5696781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Caro Shirt", 
      color: "grey",
      price: 19.00,
      stars: 5,
      reviews: 768,
      quantity: 1,
      img:"https://images.pexels.com/photos/10397680/pexels-photo-10397680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Beige Shirt", 
      color: "beige",
      price: 59.99,
      stars: 3,
      reviews: 664,
      quantity: 1,
      img:"https://images.pexels.com/photos/6776719/pexels-photo-6776719.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Bright Jacket", 
      color: "white",
      price: 35.00,
      stars: 5,
      reviews: 324,
      quantity: 1,
      img:"https://images.pexels.com/photos/7902302/pexels-photo-7902302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      title: "Dark Shirt", 
      color: "black",
      price: 86.49,
      stars: 4,
      reviews: 443,
      quantity: 1,
      img:"https://images.pexels.com/photos/4350287/pexels-photo-4350287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "White Shirt",
      color: "white",
      price: 14.99,
      stars: 5,
      reviews: 211,
      quantity: 1,
      img:"https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "White Shirt", 
      color: "white",
      price: 39.99,
      stars: 4,
      reviews: 175,
      quantity: 1,
      img:"https://images.pexels.com/photos/4101142/pexels-photo-4101142.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Orange Shirt", 
      color: "orange",
      price: 29.99,
      stars: 3,
      reviews: 129,
      quantity: 1,
      img:"https://images.pexels.com/photos/6930504/pexels-photo-6930504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Red Caro", 
      color: "red",
      price: 65.99,
      stars: 4,
      reviews: 55,
      quantity: 1,
      img:"https://images.pexels.com/photos/1933589/pexels-photo-1933589.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Shirt & Jeans", 
      color: "white",
      price: 129.00,
      stars: 5,
      reviews: 690,
      quantity: 1,
      img:"https://images.pexels.com/photos/3702587/pexels-photo-3702587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Creme Pullover", 
      color: "beige",
      price: 20.99,
      stars: 4,
      reviews: 190,
      quantity: 1,
      img:"https://images.pexels.com/photos/6995886/pexels-photo-6995886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      title: "Green Caro", 
      color: "green",
      price: 29.99,
      stars: 3,
      reviews: 558,
      quantity: 1,
      img: "https://images.pexels.com/photos/9899346/pexels-photo-9899346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
]};


export const itemSlice = createSlice({

    name: "itemList",
    initialState :itemList,
    reducers: {
        incrementQuantity : (state, { payload }) => {
            const item = state.items.find((x) => x.title === payload.title);

            if (item) {
                item.quantity += payload.quantity;
            } else {
                state.items.push(payload);
            }
        },
        decrementQuantity : (state, { payload }) => {
            const item = state.items.find((name) => name.title === payload.title);

            if (item) {
                item.quantity -= payload.quantity;
            } else {
                state.items.push(payload);
            }
        },
    }
});
 


export const {incrementQuantity, decrementQuantity} = itemSlice.actions; 
export default itemSlice.reducer