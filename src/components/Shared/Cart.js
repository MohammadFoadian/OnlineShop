import React , {useContext} from 'react';
import styles from "./Cart.module.css"

// context
import { CartContext } from '../../context/CartContextProvider';

// function 
import { shorten } from '../../helpers/function';

// Icons
import trashIcon from "../../assets/icons/trash.svg"

// 51
const Cart = (props) => {

    const {dispatch} = useContext(CartContext) // 55

    const {image , title , price , quantity} = props.data // 54

    return (
        <div className={styles.container}>
            {/* 56 full */}
            <img className={styles.productImage} src={image} alt='product' /> 
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price}</p>
            </div>
            <div>
                <span className={styles.quantity}>{quantity}</span>
            </div>
            <div className={styles.buttonContainer}>
                {
                    quantity > 1  ?
                    <button onClick={() => dispatch ({type : "DECREASE" , payload : props.data})}>-</button> :
                    <button onClick={() => dispatch ({type : "REMOVE_ITEM" , payload : props.data})}><img src={trashIcon} alt='trashi' style={{width:"10px"}} /></button>
                }
                <button onClick={() => dispatch({type : "INCREASE" , payload : props.data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;