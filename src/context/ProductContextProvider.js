import React , {useState , useEffect , createContext} from 'react';

// Api
import { getProducts } from '../services/Api';  

export const ProductContext = createContext() // 11

const ProductContextProvider = ({children}) => {  // 5

    const [products , setProducts] = useState([]) // 6

    // if you want to call a function in useEffect , declare it in useEffect 
    useEffect(() => {  // 7

        const fetchAPI = async () => {  // 8
            setProducts(await getProducts()) // 9
        }

        fetchAPI() // 10

    } , [])


    return (
        
        <ProductContext.Provider value={products}> {/* 12 */}

            {children} {/* 13 */}

        </ProductContext.Provider>
    );
};

export default ProductContextProvider;