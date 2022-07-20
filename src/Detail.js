import React, {useContext} from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from './Contexts/ProductContextProvider';
import styles from './Detail.module.css';
import arrow from './Images/arrow.png';
import arrow2 from './Images/arrow2.png';
const Detail = () => {
    const {id} = useParams();
    const data = useContext(ProductContext);
    const product = data[id - 1];
    return (
        <div className={styles.container}>
            <div><div className={styles.imgcnt}><img className={styles.image} src={product.image}/></div></div>
            <div>
                <h3 className={styles.name}>{product.name}</h3>
                <div className={styles.detail}>{product.detail}</div>
                <div style={{display: "flex"}}>
                    <div className={styles.price}>{product.price}$</div>
                    <Link style={{textDecoration: "none"}} to="/products">
                    <div className={styles.btn}>Exit
                        <img className={styles.arrow2} src={arrow2}/>
                        <img className={styles.arrow} src={arrow}/>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Detail;