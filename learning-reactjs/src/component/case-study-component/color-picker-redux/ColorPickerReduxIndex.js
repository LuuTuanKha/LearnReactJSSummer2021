import React from 'react'
import ColorTableRedux from './ColorTableRedux'
import SizeRedux from './SizeRedux'
import Result from '../color-picker/Result'
const ColorPickerReduxIndex = () => {
    return (
        <div>
            <div className="row">
                <ColorTableRedux/>
                <SizeRedux/>
               
            </div>
            <br></br>
            <Result/>
            
        </div>
    )
}

export default ColorPickerReduxIndex
