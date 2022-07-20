import React, { useState, createContext } from 'react';
import phone from '../Images/phone.jpg';
import shirt from '../Images/shirt.jpg';
import car from '../Images/car.jpg';
import head from '../Images/head.webp';
 export const ProductContext = createContext();

const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Smartphone',
            price: 1000,
            detail: 'One the best smartphone in these days.',
            image: phone,
            number: 0
        },
        {
            id: 2,
            name: 'Shirt',
            price: 10,
            detail: 'Suitable for summer or in hot weather with perfect quality.',
            image: shirt,
            number: 0
        },
        {
            id: 3,
            name: 'Car',
            price: 54000,
            detail: 'With high speed 400km per hour and 4 different color variety.',
            image: car,
            number: 0
        },
        {
            id: 4,
            name: 'Headphones',
            price: 500,
            detail: 'Best sound quality',
            image: head,
            number: 0
        }
    ]);
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;