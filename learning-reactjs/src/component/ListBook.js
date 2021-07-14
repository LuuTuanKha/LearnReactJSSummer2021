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
     const deleteOnClick = (index) => {
          let temp = [...listBookstate]
          temp.splice(index, 1)
          setlistBookstate(temp)

     };


     let tableListBooks = listBookstate.map((obj, index) => {
          obj.total = obj.quantity * obj.price
          return (
               <tr key={index}>
                    <th scope="row">{obj.id}</th>
                    <td>{obj.name}</td>
                    <td>{obj.price}</td>


                    <td><button className="btn btn-secondary" onClick={() => minusOnClick(index)}>-</button> {obj.quantity} <button className="btn btn-secondary" onClick={() => plusOnClick(index)}>+</button></td>
                    <td>{obj.total}</td>
                    <td>
                         <button className="btn btn-danger" onClick={() => deleteOnClick(index)}>Delete</button>
                    </td>
               </tr>
          );
     });
     const plusOnClick = (index) => {
          let items = [...listBookstate];

          let item = { ...items[index] };

          item.quantity = item.quantity + 1;
          item.total = item.quantity * item.price
          items[index] = item;

          setlistBookstate(items);

     }
     const minusOnClick = (index) => {
          let items = [...listBookstate];

          let item = { ...items[index] };

          item.quantity = item.quantity - 1;
          if (item.quantity === 0) deleteOnClick(index)
          else { }
          console.log(item.quantity + item.quantity === 0)
          item.total = item.quantity * item.price
          items[index] = item;

          setlistBookstate(items);

     }
     const showListBooks = () => {
          setlistBookstate(listBooksFromStore);
          // console.log(listBooksFromStore);

     };
     const SaveToStore = () => {
          dispatch(getListBooks(listBookstate));

     }


     return (
          <div >
               <div >

                    <button
                         type="button"
                         className="btn btn-dark col-4"
                         onClick={() => saveListBooksToStore()}
                    >
                         Đưa dữ liệu lên Store
                    </button>



                    <button
                         type="button"
                         className="btn btn-primary col-4"
                         onClick={() => showListBooks()}
                    >
                         Xem dữ liệu
                    </button>
                    <button className="btn btn-danger col-4" onClick={() => SaveToStore()}>Lưu</button>
               </div>
               <br></br>

               <table className="table">
                    <thead className="thead-dark">
                         <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Book name</th>
                              <th scope="col">Price</th>
                              <th scope="col">Quantity</th>
                              <th scope="col">Total</th>
                              <th scope="col">Action</th>
                         </tr>
                    </thead>
                    <tbody>{tableListBooks}</tbody>
               </table>
          </div>
     );
};

export default ListBook;
