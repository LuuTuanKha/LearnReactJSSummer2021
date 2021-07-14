import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

const ProductDetail = () => {
    let {id} = useParams()
    let history = useHistory()
    
    let back = ()=>{
        history.goBack()
    }
    return (
        <div>
            <button onClick={()=>{back()}}>BACK</button>
            This is productDetail of product have id  = {id}
        </div>
    )
}

export default ProductDetail
