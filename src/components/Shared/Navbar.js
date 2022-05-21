import React , {useContext} from 'react';
import { Link } from 'react-router-dom';
// context
import { CartContext } from '../../context/CartContextProvider';

// svg
import shopIcon from "../../assets/icons/shop.svg"
import styles from "./Navbar.module.css"

// 45
const Navbar = () => { 

    const {state} = useContext(CartContext) // 46

    return (
        <div className={styles.mainContainer}>
            {/* 47 */}
            <div className={styles.container}>
                <Link to='/products' className={styles.productLink}>Products</Link>
                <div className={styles.iconContainer}>
                    <Link to='/cart'><img src={shopIcon} alt='shops' /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;