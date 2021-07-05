
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setColorPicker } from '../../../redux/action/actColorPicker';
const ResultRedux = () => {
     const dispatch = useDispatch();
    const valuePicker = useSelector((state) => state.colorPicker);
    
    const [valuestate, setvalue] = useState({})
    // console.log("Result: "+ valuePicker)
    const getdata = ()=>{
        setvalue(valuePicker)
    }
    return (
        <div>
           
            <button className="btn btn-dark" onClick={()=>getdata()}>Get data</button>
            <div className="resultBox" style={{ color: `${valuePicker.color}`, fontSize: `${valuePicker.size}px` }} >This text is text</div>
        </div>
    )
}

export default ResultRedux
