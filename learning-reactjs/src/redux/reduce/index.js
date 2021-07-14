import { combineReducers } from "redux"
import listBooks from "./listBooks"
import colorPicker from "./colorPicker"
import products from "./admin/productAdmin"
const reducer = combineReducers({
    listBooks,colorPicker,products
})
export default reducer