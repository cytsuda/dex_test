import React from "react";

const Navi = (props)=>{
	return(
      <div className="nav">
         <nav className="nav-wrap">
            <a href="/" className="nav-logo">
               Orange
            </a>
            <ul className="nav-list">
               <li exact className="nav-item"><a className="nav-link" href="/foods">Foods</a></li>
               <li className="nav-item"><a className="nav-link" href="/people">People</a></li>
               <li className="nav-item"><a className="nav-link" href="/places">Places</a></li>
            </ul>
         </nav>
      </div>
   )
};

export default Navi;