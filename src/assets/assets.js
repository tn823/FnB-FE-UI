import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import burger from './burger.png'
import topping from './topping.png'
import kid from './kid.png'
import drinks from './drinks.png'
import chicken from './chicken.png'
import salad from './salad.png'
import cake from './cake.png'
import breakfast from './breakfast.png'

// import food_1 from './food_1.png'
// import food_2 from './food_2.png'
// import food_3 from './food_3.png'
// import food_4 from './food_4.png'
// import two_beef_cheese from './two_beef_cheese.png'
// import special_beef from './special_beef.png'
// import big_beef_cheese from './big_beef_cheese.png'
// import big_mac from './big_mac.png'
// import special_royal from './special_royal.png'
// import food_10 from './food_10.png'
// import food_11 from './food_11.png'
// import food_12 from './food_12.png'
// import food_13 from './food_13.png'
// import food_14 from './food_14.png'
// import food_15 from './food_15.png'
// import food_16 from './food_16.png'
// import food_17 from './food_17.png'
// import food_18 from './food_18.png'
// import food_19 from './food_19.png'
// import food_20 from './food_20.png'
// import food_21 from './food_21.png'
// import food_22 from './food_22.png'
// import food_23 from './food_23.png'
// import food_24 from './food_24.png'
// import food_25 from './food_25.png'
// import food_26 from './food_26.png'
// import food_27 from './food_27.png'
// import food_28 from './food_28.png'
// import food_29 from './food_29.png'
// import food_30 from './food_30.png'
// import food_31 from './food_31.png'
// import food_32 from './food_32.png'

import welcome_bg from './welcome_bg.png'
import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,
    welcome_bg
}

export const menu_list = [
    { categoryId: 1, categoryName: "Burger", menu_image: burger },
    { categoryId: 2, categoryName: "Gà", menu_image: chicken },
    { categoryId: 3, categoryName: "Salad", menu_image: salad },
    { categoryId: 4, categoryName: "Bữa Ăn Vui Vẻ", menu_image: kid },
    { categoryId: 5, categoryName: "Bánh", menu_image: cake },
    { categoryId: 6, categoryName: "Nước Uống", menu_image: drinks },
    { categoryId: 7, categoryName: "Điểm Tâm", menu_image: breakfast },
    { categoryId: 8, categoryName: "Món thêm", menu_image: topping },
  ];
  
  export const food_list = [
    {
      id: "1",
      name: "Greek salad",
      image: 'https://example.com/food_1.png',
      basePrice: 12,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Salad",
      topping: [
        { id: "1", name: "Thêm rau", categoryId: "8", basePrice: 10 },
        { id: "2", name: "Thêm pho-mát", categoryId: "8", basePrice: 15 }
      ]
    },
    {
      id: "2",
      name: "Veg salad",
      image: 'https://example.com/food_2.png',
      basePrice: 18,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Salad",
      topping: [
        { id: "3", name: "Thêm sốt", categoryId: "8", basePrice: 10 }
      ]
    },
    {
      id: "3",
      name: "Clover Salad",
      image: 'https://example.com/food_3.png',
      basePrice: 16,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Salad",
      topping: [
        { id: "3", name: "Thêm sốt", categoryId: "8", basePrice: 10 }
      ]
    },
    {
      id: "4",
      name: "Chicken Salad",
      image: 'https://example.com/food_4.png',
      basePrice: 24,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Salad",
      topping: [
        { id: "5", name: "Gà nướng", categoryId: "8", basePrice: 20 }
      ]
    },
    {
      id: "5",
      name: "Burger 2 Lớp Bò Phô Mai",
      image: 'https://example.com/two_beef_cheese.png',
      basePrice: 35,
      description: "Burger Có 2 Lớp Bò Và Phô Mai",
      category: "Burger",
      topping: [
        { id: "6", name: "Sốt đậu cay", categoryId: "8", basePrice: 5 },
        { id: "7", name: "Sốt đậu không cay", categoryId: "8", basePrice: 5 }
      ]
    },
    {
      id: "6",
      name: "Burger Bò Phô Mai Đặc Biệt",
      image: 'https://example.com/special_beef.png',
      basePrice: 40,
      description: "Bò Phô Mai Đặc biệt",
      category: "Burger",
      topping: [
        { id: "6", name: "Sốt đậu cay", categoryId: "8", basePrice: 5 },
        { id: "2", name: "Thêm pho-mát", categoryId: "8", basePrice: 15 }
      ]
    },
    {
      id: "7",
      name: "Burger Bò Miếng Lớn Phô Mai",
      image: 'https://example.com/big_beef_cheese.png',
      basePrice: 20,
      description: "Burger Bò Miếng Lớn Và Phô Mai",
      category: "Burger",
      topping: [
        { id: "7", name: "Sốt cà chua", categoryId: "8", basePrice: 5 },
        { id: "2", name: "Thêm pho-mát", categoryId: "8", basePrice: 15 }
      ]
    },
    {
      id: "8",
      name: "Burber Big Mac",
      image: 'https://example.com/big_mac.png',
      basePrice: 15,
      description: "Burger 2 Lớp Bò, Phô-Mai, Rau Tươi Và Sốt Big Mac.",
      category: "Burger",
      topping: [
        { id: "8", name: "Sốt Big Mac", categoryId: "8", basePrice: 5 }
      ]
    },
    {
      id: "9",
      name: "Burger Bò Hoàng Gia Đặc Biệt",
      image: 'https://example.com/special_royal.png',
      basePrice: 14,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Burger",
      topping: [
        { id: "7", name: "Sốt cà chua", categoryId: "8", basePrice: 5 },
        { id: "2", name: "Thêm pho-mát", categoryId: "8", basePrice: 15 }
      ]
    },
    {
      id: "10",
      name: "Fruit Ice Cream",
      image: 'https://example.com/food_10.png',
      basePrice: 22,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Deserts",
      topping: [
        { id: "9", name: "Thêm trái cây", categoryId: "8", basePrice: 10 }
      ]
    },
    {
      id: "11",
      name: "Jar Ice Cream",
      image: 'https://example.com/food_11.png',
      basePrice: 10,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Deserts",
      topping: [
        { id: "10", name: "Thêm sô-cô-la", categoryId: "8", basePrice: 0 },
        { id: "11", name: "Thêm dâu tây", categoryId: "8", basePrice: 10 }
      ]
    },
    {
      id: "12",
      name: "Vanilla Ice Cream",
      image: 'https://example.com/food_12.png',
      basePrice: 12,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Deserts",
      topping: [
        { id: "10", name: "Thêm sô-cô-la", categoryId: "8", basePrice: 10 },
        { id: "11", name: "Thêm dâu tây", categoryId: "8", basePrice: 10 }
      ]
    },
    {
      id: "13",
      name: "Chicken Sandwich",
      image: 'https://example.com/food_13.png',
      basePrice: 12,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Sandwich",
      topping: [
        { id: "5", name: "Gà nướng", categoryId: "8", basePrice: 20 }
      ]
    },
    {
      id: "14",
      name: "Vegan Sandwich",
      image: 'https://example.com/food_14.png',
      basePrice: 18,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Sandwich",
      topping: [
        { id: "12", name: "Thêm bơ", categoryId: "8", basePrice: 10 }
      ]
    },
    {
      id: "15",
      name: "Grilled Sandwich",
      image: 'https://example.com/food_15.png',
      basePrice: 16,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Sandwich",
      topping: [
        { id: "2", name: "Thêm pho-mát", categoryId: "8", basePrice: 10 }
      ]
    },
    {
      id: "16",
      name: "Bread Sandwich",
      image: 'https://example.com/food_16.png',
      basePrice: 24,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Sandwich",
      topping: [
        { id: "13", name: "Bánh mì ngũ cốc nguyên hạt", categoryId: "8", basePrice: 10 }
      ]
    },
    {
      id: "17",
      name: "Cup Cake",
      image: 'https://example.com/food_17.png',
      basePrice: 14,
      description: "Food provides essential nutrients for overall health and well-being",
      category: "Cake",
      topping: [
            { id: "14", name: "Thêm kem", categoryId: "8", basePrice: 10 }
        ]
    },
    {
        id: "18",
        name: "Vegan Cake",
        image: 'https://example.com/food_18.png',
        basePrice: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake",
        topping: [
            { id: "14", name: "Thêm kem", categoryId: "8", basePrice: 10 }
        ]
    },
    {
        id: "19",
        name: "Butterscotch Cake",
        image: 'https://example.com/food_19.png',
        basePrice: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake",
        topping: [
            { id: "14", name: "Thêm kem", categoryId: "8", basePrice: 10 }
        ]
    },
    {
        id: "20",
        name: "Sliced Cake",
        image: 'https://example.com/food_20.png',
        basePrice: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake",
        topping: [
            { id: "14", name: "Thêm kem", categoryId: "8", basePrice: 10 }
        ]
    },
    {
        id: "21",
        name: "Garlic Mushroom",
        image: 'https://example.com/food_21.png',
        basePrice: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg",
        topping: [
            { id: "15", name: "Thêm rau", categoryId: "8", basePrice: 5 }
        ]
    },
    {
        id: "22",
        name: "Fried Cauliflower",
        image: 'https://example.com/food_22.png',
        basePrice: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg",
        topping: [
            { id: "16", name: "Thêm gia vị", categoryId: "8", basePrice: 5 }
        ]
    },
    {
        id: "23",
        name: "Mix Veg Pulao",
        image: 'https://example.com/food_23.png',
        basePrice: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg",
        topping: [
            { id: "15", name: "Thêm rau", categoryId: "8", basePrice: 5 }
        ]
    },
    {
        id: "24",
        name: "Rice Zucchini",
        image: 'https://example.com/food_24.png',
        basePrice: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg",
        topping: [
            { id: "15", name: "Thêm rau", categoryId: "8", basePrice: 5 }
        ]
    },
    {
        id: "25",
        name: "Cheese Pasta",
        image: 'https://example.com/food_25.png',
        basePrice: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta",
        topping: [
            { id: "2", name: "Thêm pho-mát", categoryId: "8", basePrice: 10 }
        ]
    },
    {
        id: "26",
        name: "Tomato Pasta",
        image: 'https://example.com/food_26.png',
        basePrice: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta",
        topping: [
            { id: "4", name: "Sốt cà chua",  categoryId: "8", basePrice: 5 }
        ]
    },
    {
        id: "27",
        name: "Creamy Pasta",
        image: 'https://example.com/food_27.png',
        basePrice: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta",
        topping: [
            { id: "3", name: "Thêm sốt", categoryId: "8", basePrice: 10 }
        ]
    },
    {
        id: "28",
        name: "Chicken Pasta",
        image: 'https://example.com/food_28.png',
        basePrice: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta",
        topping: [
            { id: "5",  name: "Gà nướng", categoryId: "8", basePrice: 20 }
        ]
    },
    {
        id: "29",
        name: "Butter Noodles",
        image: 'https://example.com/food_29.png',
        basePrice: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles",
        topping: [
            { id: "12", name: "Thêm bơ", categoryId: "8", basePrice: 5 }
        ]
    },
    {
        id: "30",
        name: "Veg Noodles",
        image: 'https://example.com/food_30.png',
        basePrice: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles",
        topping: [
            { id: "15", name: "Thêm rau", categoryId: "8", basePrice: 5 }
        ]
    },
    {
        id: "31",
        name: "Somen Noodles",
        image: 'https://example.com/food_31.png',
        basePrice: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles",
        topping: [
            { id: "3", name: "Thêm sốt", categoryId: "8", basePrice: 5 }
        ]
    },
    {
        id: "32",
        name: "Cooked Noodles",
        image: 'https://example.com/food_32.png',
        basePrice: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles",
        topping: [
            { id: "15", name: "Thêm rau", categoryId: "8", basePrice: 5 }
        ]
    }
];
