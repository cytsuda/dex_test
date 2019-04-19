import React from "react";

const item = (props) =>{

   let style = {
      backgroundImage: `url(${props.bg})`
   };
   return(
      <li className="list-item" style={style}>
         <p className="list-text">{props.name}</p>
      </li>
   )
};

export default item;