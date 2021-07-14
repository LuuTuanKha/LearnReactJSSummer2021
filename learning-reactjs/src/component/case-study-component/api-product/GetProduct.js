import axios from 'axios'
// import Animate from 'animate.css-react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, useHistory } from 'react-router-dom'
import { getAllProducts } from '../../../redux/action/admin/actProduct'
const GetProduct = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const routeChange = (id) => {
        let path = `/product/` + id;
        history.push(path);
    }
    

    // const [productsstate, setproductsstate] = useState([])
    const listProductsFromStore = useSelector((state) => state.products);
    useEffect(() => {
        console.log('use Effect sucess 1')

        dispatch(getAllProducts());
        console.log('use Effect sucess 2')
        console.log(listProductsFromStore.length)

        // return () => {

        // }
    }, [])
    const productOnClick = (productId) => {
        console.log(productId)

    }

    let mapproducts = listProductsFromStore.map((product, index) => {

        return <div class="card col-3 " key={index} onClick={() => routeChange(product.productId)}>

            {/* <div class="card-header text-center"><em><strong>NAME OF PRODUCT</strong></em></div> */}
            <img
                src={product.image}
                class="card-img-top"
                alt="..."
            />
            <div class="card-body">
                <h5 class="card-text"><em><strong>{product.productName}</strong></em></h5>
                <p>
                    <b>{product.sellPrice} VNĐ</b>
                    <br></br>
                </p>
                {/* <a href="#!" class="btn btn-danger w-50 " ><i class="fas fa-shopping-bag"></i> Mua</a>
                <a href="#!" class="btn btn-danger w-50 " ><i class="fas fa-shopping-bag"></i> Mua</a> */}
            </div>

        </div>


    })

    return (

        <div className="container">
            <div class="row gy-3">
                {mapproducts}

            </div>
        </div>

    )
}

export default GetProduct
