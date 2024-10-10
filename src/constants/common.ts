import burger from "../assets/burger.png"
import drinks from '../assets/drinks.png'
import fried_chicken from '../assets/fried_chicken.png'
import salad from '../assets/salad.png'
import combo from '../assets/combo.png'
import pizza from '../assets/pizza.png'
import rice from '../assets/rice.png'
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
  { categoryId: 605545, categoryName: "Combo", menu_image: combo },
  { categoryId: 614862, categoryName: "Burger", menu_image: burger },
  { categoryId: 605046, categoryName: "Pizza", menu_image: pizza },
  { categoryId: 613182, categoryName: "Gà rán", menu_image: fried_chicken },
  { categoryId: 613739, categoryName: "Cơm", menu_image: rice },
  { categoryId: 605964, categoryName: "Salad", menu_image: salad },
  { categoryId: 437160, categoryName: "Tráng miệng", menu_image: cake },
  { categoryId: 488598, categoryName: "Thức uống", menu_image: drinks },
];
