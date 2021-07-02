import { GET_LIST_BOOKS } from "../constants/types";
export const getListBooks = (listBooks)=>{
    return {
        type: GET_LIST_BOOKS,
        listBooks
    }
}
