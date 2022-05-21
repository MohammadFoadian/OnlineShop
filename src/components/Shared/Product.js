import React , {useContext} from 'react';
import {Link} from "react-router-dom"
import styles from "./Product.module.css"

// svg
import trashIcon from "../../assets/icons/trash.svg"

// Functions
import { isInCart, shorten , quantityCount } from '../../helpers/function';

// context
import { CartContext } from '../../context/CartContextProvider';

const Product = ({productData}) => { // 18


    const {state , dispatch} = useContext(CartContext) // 40

    return (

        // 19 full part

        <div className={styles.container}>
            <img className={styles.cardImage} src={productData.image} alt='product' style={{width : "200px"}} /> 
            <h3>{shorten(productData.title)}</h3> {/* ch. after 23 */}
            <p>{productData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productData.id}`} >Details</Link> {/* ch. after 28 */}
            </div>
            <div className={styles.buttonContainer}>
                {
                    // 42
                    isInCart(state , productData.id) ? 
                    <button onClick={() => dispatch({type : "INCREASE" , payload : productData})}>+</button> :
                    <button onClick={() => dispatch({type : "ADD_ITEM" , payload : productData})}>Add To Cart</button>
                }
                {
                    // 43
                    quantityCount(state , productData.id) > 1 && <button onClick={() => dispatch ({type : "DECREASE" , payload : productData})}>-</button>
                }
                {
                    // 44
                    quantityCount(state , productData.id) === 1 && <button onClick={() => dispatch({type : "REMOVE_ITEM" , payload : productData})}><img src={trashIcon} alt='trash' style={{width : "10px"}} /></button>
                }
            </div>
        </div>
    );
};

export default Product;