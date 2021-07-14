import axios from "axios";
import { SET_ALL_PRODUCTS } from "../../constants/types";
export const setAllProductsToStore = (products) => {
    return {
        type: SET_ALL_PRODUCTS,
        products,
    };
};
export const getAllProducts = () => {
    const url = "http://localhost:8080/projectperfume/api/products";
    return (dispatch) => {
        return axios
            .get(url)
            .then((res) => {
                console.log('Get sucess!')
                dispatch(setAllProductsToStore(res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};