import React from "react";
import { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Form = () => {
     
     let obj = { value: "" };
     const [arrobjstate, setarrobjstate] = useState([]);

     const btnClick = () => {
          setarrobjstate((arrobj) => [...arrobj, obj]);
     };
     const inputOnChange = (event) => {
          obj.value = event.target.value;
          console.log(obj.value);
     };
   
     let tableArr = arrobjstate.map((obj, index) => {
        obj.index = index;
          return (
               <tr>
                    <th scope="row">{obj.index+1}</th>
                    <td>{obj.value}</td>
                    
                    <td>
                         <button className="btn btn-danger" onClick={() => deleteOnClick(obj.index)}>Delete</button>
                    </td>
               </tr>
          );
     });
     const deleteOnClick = index => {
            console.log(index)
         let arrtemp = arrobjstate.filter(obj => obj.index !==index)
         setarrobjstate(arrtemp)
       
    }
     return (
          <div>
              
               <input onChange={inputOnChange} />{" "}
               <button className="btn btn-light" onClick={() => btnClick()}>
                    Thêm
               </button>
               <br></br>
            
               <br />
               <table className="table">
                    <thead className="thead-dark">
                         <tr>
                              <th scope="col">STT</th>
                              <th scope="col">Value</th>
                              <th scope="col">Action</th>
                         </tr>
                    </thead>
                    <tbody>{tableArr}</tbody>
               </table>
          </div>
     );
};

export default Form;
