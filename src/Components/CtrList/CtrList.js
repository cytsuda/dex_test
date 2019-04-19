import React, { Component } from 'react';
import { Redirect, Route, NavLink } from 'react-router-dom';
import List from "../Lista/List";

const Parse = require("parse");

class CtrList extends Component {
   constructor(props) {
      super(props);
      this.state =""
   }
   logOut = () =>{
      console.log("Logout");
      Parse.User.logOut();
   }
   render(){
      if(!Parse.User.current()){
         console.log("Redirect!");
         return <Redirect to="/"/>
      } else {
         console.log("Compile information");
      }
      return(
         <div>
            <header className="nav">
               <nav className="nav-wrap">
                  <a onClick={this.logOut} href="/" className="nav-logo">
                     Orange
                  </a>
                  <ul className="nav-list">
                    <li className="nav-item">
                        <NavLink
                           to="/food"
                           exact className="nav-link"
                           activeClassName="active"
                        >Food</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink
                           to="/people"
                           exact className="nav-link"
                           activeClassName="active"
                        >People</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink
                           to="/places"
                           exact className="nav-link"
                           activeClassName="active"
                        >Places</NavLink>
                     </li>
                  </ul>
               </nav>
            </header>
            <Route exact path="/:id" component={List} />
         </div>
      );
   }
}

export default CtrList;