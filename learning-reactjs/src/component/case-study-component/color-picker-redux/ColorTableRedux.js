import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setColorPicker } from '../../../redux/action/actColorPicker';
const ColorTableRedux = () => {
    const dispatch = useDispatch();
    const valuePicker = useSelector((state) => state.colorPicker);
    const [valuestate, setvaluestate] = useState({})
    const arrColor = ['lightblue', 'orange', 'black', 'green']
    // setvaluestate(valuePicker)
    // let color = "red"
    const colorBoxOnClick = (colorC) => {
   
        const clone = {...valuePicker, color: colorC}
        dispatch(setColorPicker(clone));
        console.log(clone)
       
       
    }
    const maparrColor = arrColor.map((color, index) => {
        return <button key={index} className="colorBox" style={{ backgroundColor: `${color}` }} onClick={() => colorBoxOnClick(color)}></button>
    })
    return (
        <div className = "col-6">
        <div className="card" >
            <div className="card-header">
                Color Picker
               
              
            </div>
            <div className="card-body">{maparrColor}</div>



        </div>
    </div>
    )
}

export default ColorTableRedux
