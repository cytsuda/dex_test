import React from "react";
import Item from "./Items";

const list = (props) =>{
   return(
      <div className="list">
        <h3 className="list-title">List of {props.listName}</h3>
         <hr></hr>
         <ul className="list-list">
            {
               props.list.map((item) => 
               (<Item name={item.name} bg={item.link} key={item.objectId}/>))
            }
         </ul>
      </div>
   )
};

export default list;
