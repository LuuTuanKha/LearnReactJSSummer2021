import { GET_LIST_BOOKS } from "../constants/types";
let inittialListBooks = []
let reducer = (state = inittialListBooks,action ) =>{
	let {listBooks,type} = action;
	//Dùng if hoặc switch case dể phân biệt các hàm
	if(type===GET_LIST_BOOKS){
		state = listBooks
		return state;
	}
	return state
}
export default reducer