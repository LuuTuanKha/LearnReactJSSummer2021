import React from "react";
import { Link, Route } from "react-router-dom";

const Nav = () => {
     const CustomLink = ({ label, to, activeOnlyWhenExact }) => {
          return (
               <Route
                    path={to}
                    exact={activeOnlyWhenExact}
                    children={({ match }) => {
                         let matchClass = match ? "active-route" : "";
                         return (
                              <li className="nav-item">
                                   <Link
                                        className={`nav-link ${matchClass}`}
                                        to={to}
                                   >
                                        {label}
                                   </Link>
                              </li>
                         );
                    }}
               />
          );
     };
     const listLink = [
          { label: "Trang chủ", to: "/show-list", activeOnlyWhenExact: true },
          { label: "Form", to: "/Form", activeOnlyWhenExact: true },
         
     ];
     const mapLinkList = listLink.map((link,index) => {
        return <CustomLink label={link.label} to = {link.to} activeOnlyWhenExact= {link.activeOnlyWhenExact} key={index} />
     })
     return (
          <div>
               <ul className="nav justify-content-center">
                    {mapLinkList}
               </ul>
          </div>
     );
};

export default Nav;
