import React from 'react'
import { Link } from 'react-router-dom'
import ColorPickerReduxIndex from './color-picker-redux/ColorPickerReduxIndex';
import ColorPickerIndex from './color-picker/ColorPickerIndex';
import Form from '../Form';
import { useState } from 'react';
import ListBook from '../ListBook';

const CaseStudyIndex = () => {

    const arr = ["Form", "Redux", "Color Picker", "Color Picker (Redux)"]

    const [currentIndex, setCurrentIndex] = useState(-1)
    const changeIndex = (index) => {
        setCurrentIndex(index)
    }
    const arrMap = arr.map((item, index) => {
        return <Link className="dropdown-item" exac onClick={() => changeIndex(index)} key={index}> {item} </Link>
    })

    console.log(currentIndex)

    return (

        <div>

            <nav className="justify-content-center navbar navbar-expand-sm bg-dark navbar-dark">
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
            <br></br>

            {currentIndex === 0 && <Form />}
            {currentIndex === 1 && <ListBook />}
            {currentIndex === 2 && <ColorPickerIndex />}
            {currentIndex === 3 && <ColorPickerReduxIndex />}

        </div>

    )
}

export default CaseStudyIndex
