import React , {useContext} from 'react';
import styles from "./Store.module.css"

// Components
import Product from './Shared/Product';

// context
import { ProductContext } from '../context/ProductContextProvider';

const Store = () => { // 15

    const products =useContext(ProductContext) // 16

    return (
        <div className={styles.container}> {/* 20 */}

            {
                products.map(product => <Product
                                key={product.id} 
                                productData={product} /> ) // 17
            }
        </div>
    );
};

export default Store;