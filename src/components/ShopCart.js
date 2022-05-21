import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
import styles from "./ShopCart.module.css"

// component
import Cart from './Shared/Cart';

// context
import { CartContext } from '../context/CartContextProvider';


// 49
const ShopCart = () => {


    const {state , dispatch} = useContext(CartContext) // 52

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {
                    state.selectedItems.map(item => <Cart key={item.id} data={item} />) // 53
                }
            </div>
            {/* 57 */}
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total Items : </span>{state.itemsCounter}</p>
                    <p><span>Total Payments : </span>{state.total}</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.checkout} onClick={() => dispatch ({type : "CHECKOUT"  })}>Check Out</button>
                        <button className={styles.clear} onClick={() => dispatch ({type : "CLEAR"  })}> CLEAR </button>
                    </div>
                </div>
            }

            {/* 59 */}
            {
                state.checkout && <div className={styles.complete}>
                    <h3>Check Out Successfully</h3>
                    <Link to='/products'>Buy More</Link>
                </div>
            }

            {/* 60 */}
            {
                !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                    <h3>Want To Buy ? </h3>
                    <Link to='/products'>Go To Shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;