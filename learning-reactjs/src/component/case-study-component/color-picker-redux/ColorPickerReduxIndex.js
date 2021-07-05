import React from 'react'
import ColorTableRedux from './ColorTableRedux'
import SizeRedux from './SizeRedux'
import ResultRedux from './ResultRedux';
import { useDispatch, useSelector } from "react-redux";
import { setColorPicker } from '../../../redux/action/actColorPicker';
const ColorPickerReduxIndex = () => {
    const dispatch = useDispatch();
    // dispatch(setColorPicker({color: 'lightblue', size: 8}));
    const valuePicker = useSelector((state) => state.colorPicker);


    return (
        <div>
            <div className="row">
                <ColorTableRedux/>
                <SizeRedux/>
             
            </div>
            <br></br>
            <ResultRedux/>
            
        </div>
    )
}

export default ColorPickerReduxIndex
