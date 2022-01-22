import { createSlice } from "@reduxjs/toolkit";


 
const itemList =   [
    { 
      id:1,
      title: "Red Pullover", 
      color: "red",
      price: 29.99,
      stars: 4,
      reviews: 123,
      quantity: 1,
      img: "https://images.pexels.com/photos/4871119/pexels-photo-4871119.jpeg?cs=srgb&dl=pexels-roman-odintsov-4871119.jpg&fm=jpg"
    },
    {
      id:2,
      title: "Caro Shirt", 
      color: "grey",
      price: 19.00,
      stars: 5,
      reviews: 768,
      quantity: 1,
      img:"https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg?cs=srgb&dl=pexels-ella-olsson-3026805.jpg&fm=jpg"
    },
    {
      id:3,
      title: "Beige Shirt", 
      color: "beige",
      price: 59.99,
      stars: 3,
      reviews: 664,
      quantity: 1,
      img:"https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?cs=srgb&dl=pexels-trang-doan-1092730.jpg&fm=jpg"
    },
    {
      id:4,
      title: "Bright Jacket", 
      color: "white",
      price: 35.00,
      stars: 5,
      reviews: 324,
      quantity: 1,
      img:"https://images.pexels.com/photos/5175606/pexels-photo-5175606.jpeg?cs=srgb&dl=pexels-shameel-mukkath-5175606.jpg&fm=jpg"
    },
    {
      id:5,
      title: "Dark Shirt", 
      color: "black",
      price: 86.49,
      stars: 4,
      reviews: 443,
      quantity: 1,
      img:"https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?cs=srgb&dl=pexels-trang-doan-1132047.jpg&fm=jpg"
    },
    {
      id:6,
      title: "White Shirt",
      color: "white",
      price: 14.99,
      stars: 5,
      reviews: 211,
      quantity: 1,
      img:"https://images.pexels.com/photos/159887/pexels-photo-159887.jpeg?cs=srgb&dl=pexels-energepiccom-159887.jpg&fm=jpg"
    },
    {
      id:7,
      title: "White Shirt", 
      color: "white",
      price: 39.99,
      stars: 4,
      reviews: 175,
      quantity: 1,
      img:"https://images.pexels.com/photos/1260591/pexels-photo-1260591.jpeg?cs=srgb&dl=pexels-the-lazy-artist-gallery-1260591.jpg&fm=jpg"
    },
    {
      id:8,
      title: "Orange Shirt", 
      color: "orange",
      price: 29.99,
      stars: 3,
      reviews: 129,
      quantity: 1,
      img:"https://images.pexels.com/photos/674689/pexels-photo-674689.jpeg?cs=srgb&dl=pexels-anastasia-zhenina-674689.jpg&fm=jpg"
    },
    {
      id:9,
      title: "Red Caro", 
      color: "red",
      price: 65.99,
      stars: 4,
      reviews: 55,
      quantity: 1,
      img:"https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg?cs=srgb&dl=pexels-ella-olsson-3026805.jpg&fm=jpg"
    },
    {
      id:10,
      title: "Shirt & Jeans", 
      color: "white",
      price: 129.00,
      stars: 5,
      reviews: 690,
      quantity: 1,
      img:"https://images.pexels.com/photos/4561588/pexels-photo-4561588.jpeg?cs=srgb&dl=pexels-anastasia-zhenina-4561588.jpg&fm=jpg"
    },
    {
      id:11,
      title: "Creme Pullover", 
      color: "beige",
      price: 20.99,
      stars: 4,
      reviews: 190,
      quantity: 1,
      img:"https://images.pexels.com/photos/4117548/pexels-photo-4117548.jpeg?cs=srgb&dl=pexels-daria-shevtsova-4117548.jpg&fm=jpg"
    },
    {
      id:12,
      title: "Green Caro", 
      color: "green",
      price: 29.99,
      stars: 3,
      reviews: 558,
      quantity: 1,
      img: "https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg?cs=srgb&dl=pexels-ella-olsson-3026805.jpg&fm=jpg"
    },
    {
      id:13,
      title: "Green Caro", 
      color: "green",
      price: 29.99,
      stars: 3,
      reviews: 558,
      quantity: 1,
      img: "https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg?cs=srgb&dl=pexels-ella-olsson-3026805.jpg&fm=jpg"
    },
    {
      id:14,
      title: "Green Caro", 
      color: "green",
      price: 29.99,
      stars: 3,
      reviews: 558,
      quantity: 1,
      img: "https://images.pexels.com/photos/3026805/pexels-photo-3026805.jpeg?cs=srgb&dl=pexels-ella-olsson-3026805.jpg&fm=jpg"
    },
    {
      id:15,
      title: "Green Caro", 
      color: "green",
      price: 29.99,
      stars: 3,
      reviews: 558,
      quantity: 1,
      img: "https://images.pexels.com/photos/2874989/pexels-photo-2874989.jpeg?cs=srgb&dl=pexels-tioroshi-lazaro-2874989.jpg&fm=jpg"
    }
] ;


export const itemSlice = createSlice({

    name: "itemList",
    initialState: {
      itemList: itemList ,
      totalPrice : 0
    },
    reducers: {
        incrementQuantity : (state, { payload }) => {
          const item = state.itemList[payload] ;
          item.quantity +=1;
        },

        decrementQuantity : (state, { payload }) => {
          const item = state.itemList[payload] ;
          item.quantity -=1;
        },
    }
});
 


export const {incrementQuantity, decrementQuantity} = itemSlice.actions; 
export default itemSlice.reducer