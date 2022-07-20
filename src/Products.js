import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import image from './Images/shop.png';
import arrow from './Images/arrow.png';
import arrow2 from './Images/arrow2.png';
import styles from './Products.module.css';
import { ProductContext } from './Contexts/ProductContextProvider';
import { CounterContext } from './Contexts/CounterContextProvider';
import { TotalContext } from './Contexts/TotalContextProvider';
import CartProduct from './CartProduct';
const Products = () => {
    const products = useContext(ProductContext);
    const {num, setNum} = useContext(CounterContext);
    const {total, setTotal} = useContext(TotalContext);
    const [isClicked, setIsClicked] = useState(false);
    return (
        <>
        <div style={{display: "flex"}}>
            <Link style={{textDecoration: "none"}} to={"/login"}><div className={styles.login}>Login</div></Link>
            <Link style={{textDecoration: "none"}} to={"/signup"}><div className={styles.signup}>Signup</div></Link>
        </div>
        <img onClick={isClicked ? () => setIsClicked(false) : () => setIsClicked(true)} src={image} className={styles.image} />
        <div style={isClicked ? {right: "5px", top: "16px",transition: "0.7s"} : {transition: "0.7s"}} className={num > 0 ? styles.counter : styles}>{num > 0 ? num : ''}</div>
        <div className={isClicked ? styles.cart : styles.cartclose}>
        {isClicked && 
            products.map(product => product.number > 0 ? <CartProduct key={product.id} productData={product}/> : "")}
            {isClicked && <div className={styles.buy}>
                <span>Total: {total}$</span>
                <div>Purchase <img className={styles.arrow2} src={arrow2}/><img className={styles.arrow} src={arrow}/></div>
            </div>}
        </div>
        <div style={{display : "flex", flexWrap: "wrap"}}>
           {products.map(product => <Product key={product.id} productData={product}/>)}
        </div>
        </>
    );
};

export default Products;