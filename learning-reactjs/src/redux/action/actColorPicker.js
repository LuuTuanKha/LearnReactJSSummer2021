import { COLOR_PICKER } from "../constants/types";
export const setColorPicker = (colorPicker)=>{
    return {
        type: COLOR_PICKER,
        colorPicker
    }
}