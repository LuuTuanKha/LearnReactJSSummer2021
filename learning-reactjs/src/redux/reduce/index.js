import { combineReducers } from "redux"
import listBooks from "./listBooks"
import colorPicker from "./colorPicker"
const reducer = combineReducers({
    listBooks,colorPicker
})
export default reducer