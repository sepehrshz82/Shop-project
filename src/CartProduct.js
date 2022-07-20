import React from 'react';
import styles from './CartProduct.module.css';

const CartProduct = ({productData}) => {
    const total = productData.number * productData.price;
    return (
        <div className={styles.container}>
            <img className={styles.image} src={productData.image}/>
            <div className={styles.name}>{productData.name}</div>
            <div className={styles.number}>{productData.number} x</div>
            <div className={styles.price}>{productData.price} = {total}</div>
        </div>
    );
};

export default CartProduct;