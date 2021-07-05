import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setColorPicker } from '../../../redux/action/actColorPicker';

const SizeRedux = () => {
    const dispatch = useDispatch()
    const valuePicker = useSelector((state) => state.colorPicker);
    const [valuestate, setvaluestate] = useState({})

    const plusOnClick = () => {
        let sizeclone = { ...valuePicker }

        sizeclone.size = sizeclone.size + 1
        // setvaluestate(sizeclone)
        dispatch(setColorPicker(sizeclone));
    }
    const minusOnClick = () => {
        let sizeclone = { ...valuePicker }
        if (sizeclone.size === 8) sizeclone.size = sizeclone.size + 0
        else
            sizeclone.size = sizeclone.size - 1

        // setvaluestate(sizeclone)
        dispatch(setColorPicker(sizeclone));
    }
    const reset = () => {
        let sizeclone = { ...valuePicker, color: 'lightblue', size: 8 }

        // setvaluestate(sizeclone)
        dispatch(setColorPicker(sizeclone));
    }
    return (
        <div className="col-6">
            <div className="card h-100 " >
                <div className="card-header">
                    Size: {valuePicker.size} px
                </div>
                <div className="card-body">
                    <button className="btn btn-dark" onClick={() => minusOnClick()}>Giảm</button>
                    <button className="btn btn-dark" onClick={() => plusOnClick()}>Tăng</button>
                    <button className="btn btn-dark" onClick={() => reset()}>Reset</button>
                </div>
            </div>
        </div>

    )
}

export default SizeRedux
