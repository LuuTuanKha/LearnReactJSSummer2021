import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListBooks } from "../redux/action/actListBook";
const ListBook = () => {
     const dispatch = useDispatch();
     const [listBookstate, setlistBookstate] = useState([]);
     const listBooksFromStore = useSelector((state) => state.listBooks);
     const books = [
          { id: 0, name: "Book Name 1", price: 20000, quantity: 2 },
          { id: 1, name: "Book Name 2", price: 50000, quantity: 4 },
          { id: 2, name: "Book Name 3", price: 79000, quantity: 2 },
          { id: 3, name: "Book Name 4", price: 96000, quantity: 6 },
          { id: 4, name: "Book Name 5", price: 11000, quantity: 2 },
          { id: 5, name: "Book Name 5", price: 11000, quantity: 2 },
          { id: 6, name: "Book Name 5", price: 11000, quantity: 2 },
          { id: 7, name: "Book Name 5", price: 11000, quantity: 2 },
     ];
     const saveListBooksToStore = () => {
          dispatch(getListBooks(books));
     };
     let tableListBooks = listBookstate.map((obj, index) => {
         
          return (
               <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{obj.name}</td>
                    <td>{obj.price}</td>
                    <td><button className="btn btn-secondary">-</button> {obj.quantity} <button className= "btn btn-secondary">+</button></td>

                    <td>
                         <button className="btn btn-danger">Delete</button>
                    </td>
               </tr>
          );
     });

     const showListBooks = () => {
          setlistBookstate(listBooksFromStore);
     console.log(listBooksFromStore);
          
     };

     return (
          <div>
               <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => saveListBooksToStore()}
               >
                    Đưa dữ liệu lên Store
               </button>

          
               <br></br>
               <br></br>
               <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => showListBooks()}
               >
                    Xem dữ liệu
               </button>
              <br></br>

               <table className="table">
                    <thead className="thead-dark">
                         <tr>
                              <th scope="col">STT</th>
                              <th scope="col">Value</th>
                              <th scope="col">Price</th>
                              <th scope="col">Quantity</th>
                              <th scope="col">Action</th>
                         </tr>
                    </thead>
                    <tbody>{tableListBooks}</tbody>
               </table>
          </div>
     );
};

export default ListBook;
