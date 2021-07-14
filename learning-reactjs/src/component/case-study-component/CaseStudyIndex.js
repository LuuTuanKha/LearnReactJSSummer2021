import React from 'react'
import { Link } from 'react-router-dom'
import ColorPickerReduxIndex from './color-picker-redux/ColorPickerReduxIndex';
import ColorPickerIndex from './color-picker/ColorPickerIndex';
import Form from '../Form';
import { useState } from 'react';
import ListBook from '../ListBook';
import GetProductIndex from './api-product/GetProductIndex';
import ReduxRouteIndex from './route/ReduxRouteIndex';
import Formik from './formik/Formik';
const CaseStudyIndex = () => {

    const arr = ["Form", "Redux", "Color Picker", "Color Picker (Redux)"]
    const arr2 = ["Get", "ReduxRoter", "Put", "Delete"]

    const [currentIndex, setCurrentIndex] = useState(-1)
    const [currentIndex2, setCurrentIndex2] = useState(-1)
    const changeIndex = (index) => {
        setCurrentIndex(index)
        setCurrentIndex2(-1)
    }
    const changeIndex2 = (index) => {
        setCurrentIndex2(index)
        setCurrentIndex(-1)
    }
    const arrMap = arr.map((item, index) => {
        return <Link className="dropdown-item" exac onClick={() => changeIndex(index)} key={index}> {item} </Link>
    })
    const arrMap2 = arr2.map((item, index) => {
        return <Link className="dropdown-item" exac onClick={() => changeIndex2(index)} key={index}> {item} </Link>
    })

    console.log(currentIndex)

    return (

        <div>

            {/* <nav className="justify-content-center navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                            CS Week01
                        </Link>
                        <div className="dropdown-menu">
                            {arrMap}
                        </div>

                    </li>

                </ul>
            </nav>
            <br></br> */}


            <header class="justify-content-center">

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
                    <div class="justify-content-center">
                        {/* <button
                            class="navbar-toggler"
                            type="button"
                            data-mdb-toggle="collapse"
                            data-mdb-target="#navbarExample01"
                            aria-controls="navbarExample01"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i class="fas fa-bars"></i>
                        </button> */}
                        <div class=" collapse navbar-collapse w-100 " id="navbarExample01">
                            <ul class="navbar-nav">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-dark">Basic</button>
                                    <button
                                        type="button"
                                        class="btn btn-dark dropdown-toggle dropdown-toggle-split"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span class="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu">
                                        {arrMap}
                                    </ul>
                                </div>
                            
                            
                                <div class="btn-group">
                                    <button type="button" class="btn btn-dark ">API</button>
                                    <button
                                        type="button"
                                        class="btn btn-dark dropdown-toggle dropdown-toggle-split"
                                        data-mdb-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <span class="visually-hidden">Toggle Dropdown</span>
                                    </button>
                                    <ul class="dropdown-menu ">
                                        {arrMap2}
                                    </ul>
                                </div>
                            </ul>
                        </div>
                        <div class="collapse navbar-collapse justify-content-center" id="navbarExample01">
                            
                        </div>
                    </div>
                </nav>





            </header>
            <br></br>
            {currentIndex === 0 && <Form />}
            {currentIndex === 1 && <ListBook />}
            {currentIndex === 2 && <ColorPickerIndex />}
            {currentIndex === 3 && <ColorPickerReduxIndex />}

            {currentIndex2 === 0 && <GetProductIndex />}
            {currentIndex2 === 1 && <ReduxRouteIndex />}
            {currentIndex2 === 2 && <Formik />}
            {currentIndex2 === 3 && <ColorPickerReduxIndex />}

        </div>

    )
}

export default CaseStudyIndex
