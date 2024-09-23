import burger from "../assets/burger.png"
import topping from '../assets/topping.png'
import kid from '../assets/kid.png'
import drinks from '../assets/drinks.png'
import chicken from '../assets/chicken.png'
import salad from '../assets/salad.png'
import cake from '../assets/cake.png'

export const ROOT_URL = import.meta.env.VITE_ROOT_URL || 'http://localhost:3000/';

export const ENDPOINTS = Object.freeze({
  //product
  PRODUCTS: `${ROOT_URL}api/products`,
  PRODUCTSBYCATE: `${ROOT_URL}api/products/category`,
  //orders
  CREATE_ORDER: `${ROOT_URL}api/orders`
});

export const MENU_LIST = [
  { categoryId: 605046, categoryName: "PIZZA", menu_image: burger },
  { categoryId: 613182, categoryName: "Gà rán", menu_image: chicken },
  { categoryId: 613739, categoryName: "Cơm", menu_image: salad },
  { categoryId: 605964, categoryName: "RAU", menu_image: kid },
  { categoryId: 488598, categoryName: "CAFE", menu_image: cake },
  { categoryId: 437160, categoryName: "NƯỚC", menu_image: drinks },
  { categoryId: 605545, categoryName: "BÒ", menu_image: topping },
];
