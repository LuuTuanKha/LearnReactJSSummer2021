import React from "react";
import { useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Form = () => {
     const [objstate, setobj] = useState("");
     const [arrobjstate, setarrobjstate] = useState([]);
     const btnClick = () => {
          setarrobjstate((arrobjcstate) => [...arrobjstate, objstate]);

          console.log(arrobjstate.length);
     };

     let tableArr = arrobjstate.map((obj, index) => {
          return (
               <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{obj}</td>

                    <td>
                         <button
                              className="btn btn-danger"
                              onClick={() => deleteOnClick(index)}
                         >
                              Delete
                         </button>
                    </td>
               </tr>
          );
     });
     const deleteOnClick = (index) => {
         let temp = [...arrobjstate]
         temp.splice(index,1)
         setarrobjstate(temp)
        //  setarrobjstate(arrobjstate.splice(index,1))
        //   setarrobjstate((arrobjstate) =>
        //        arrobjstate.filter((item, i) => i !== index)
        //   );
     };
     return (
          <div>
               <input onChange={(event) => setobj(event.target.value)} />{" "}
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
