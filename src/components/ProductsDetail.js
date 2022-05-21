import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from "./ProductDetails.module.css"

// context
import { ProductContext } from '../context/ProductContextProvider';

const ProductsDetail = (props) => { // 26

    const id = props.match.params.id // 28
    const data = useContext(ProductContext) // 29
    const product = data[id - 1] // 30

    // destructure
    const {image , title , description , price , category} = product // 31

    return (
        
        <div className={styles.container}> {/* full part of 32 */}
            <img className={styles.image} src = {image} alt='picturee' />   
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category</span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}> {price} </span>
                    <Link to="/products">Back To Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetail;