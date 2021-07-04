import React, { useState } from 'react'

import Result from './Result'

const Size = (props) => {
     const [sizestate, setsizestate] = useState(8)
    const plusSize = ()=>{
         setsizestate(sizestate+1)
        props.size(sizestate+1)

    }
    const minusSize = ()=>{
        if(sizestate===8) setsizestate(8)
        else
        setsizestate(sizestate-1)
        props.size(sizestate-1)
        
    }
    const resetOnClick = () =>{
        setsizestate(8)  
        props.size(8)
        props.color('lightblue')
    }
    return (
        <div className="col-6 ">

            <div className="card h-100 " >
                <div className="card-header">
                    Size: {sizestate} px
                </div>
                <div className="card-body">
                    <button className="btn btn-dark"  onClick={()=>minusSize()}>Giảm</button> 
                    <button className="btn btn-dark"onClick={()=>plusSize()}>Tăng</button>
                    <button className="btn btn-dark" onClick={()=>resetOnClick()}>Reset</button>
                </div>
            </div>

           
         </div>   
       
    )
}

export default Size
