import { COLOR_PICKER } from "../constants/types";
let inittialColorPicker = {}
let reducer = (state = inittialColorPicker,action ) =>{
	let {colorPicker,type} = action;
	//Dùng if hoặc switch case dể phân biệt các hàm
	if(type===COLOR_PICKER){
		state = colorPicker
		return state;
	}
	return state
}
export default reducer