import axios from "axios"

const BASE_URL = "https://fakestoreapi.com" // 1

const getProducts = async () => {  // 2

    const response = await axios.get(`${BASE_URL}/products`) // 3

    return response.data // 4
}


export {getProducts}





