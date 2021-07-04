import React from 'react'

const Result = (props) => {
    console.log('x' + props.color)
    return (
        <div>
            <div className="resultBox" style={{color: `${props.color}`, fontSize: `${props.size}px`}} >This text is text</div>
        </div>
    )
}

export default Result
