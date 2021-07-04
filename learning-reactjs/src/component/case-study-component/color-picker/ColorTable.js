import React, { useState } from 'react'
import '../../../css/color-picker.css'
import Result from './Result'
import Size from './Size'
const ColorTable = () => {
    const [sizestate, setsizestate] = useState(8)
    const arrColor = ['lightblue', 'orange', 'black', 'green']
    const [colorstate, setcolor] = useState("lightblue")
    // let color = "red"
    const colorBoxOnClick = (colorC) => {
        setcolor(colorC)
        console.log(colorstate)
    }
    const maparrColor = arrColor.map((color, index) => {
        return <button className="colorBox" style={{ backgroundColor: `${color}` }} onClick={() => colorBoxOnClick(color)}></button>
    })
    return (

        <div className="row">
            <div className = "col-6">
                <div className="card" >
                    <div className="card-header">
                        Color Picker
                    </div>
                    <div className="card-body">{maparrColor}</div>



                </div>
            </div>
            
            <Size size = {sizestate=>setsizestate(sizestate)} color ={colorstate=>setcolor(colorstate)}  />
           
            <div className = "col-12">
                    <Result color ={colorstate} size= {sizestate}/>
            </div>
        </div>

    )
}

export default ColorTable
