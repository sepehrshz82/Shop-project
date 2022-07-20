import React, { useContext, useReducer } from 'react';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';
import { CounterContext } from './Contexts/CounterContextProvider';
import { TotalContext } from './Contexts/TotalContextProvider';
const Product = ({productData}) => {
    const {num, setNum} = useContext(CounterContext);
    const {total, setTotal} = useContext(TotalContext);
    const add = () =>{
        productData.number += 1;
        setNum(num + 1);
        setTotal(total + productData.price);
    }
    const remove = () =>{
        if(productData.number > 0){
            productData.number -= 1;
            setNum(num - 1);
            setTotal(total - productData.price);
        }
    }
    return (
        <div className={styles.container}>
            <img className={styles.image} src={productData.image} />
            <div className={styles.name}>{productData.name}</div>
            <div className={styles.fx}>
                <div className={styles.price}>{productData.price}$</div>
                <button onClick={add} className={styles.add}>+</button>
                <div className={styles.number}>{productData.number}</div>
                <button onClick={remove} className={styles.delete}>-</button>
                <Link style={{textDecoration:"none"}} to={`/products/${productData.id}`}><div className={styles.detail}>Details</div></Link>
            </div>
        </div>
    );
};

export default Product;