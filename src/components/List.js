import React from "react";
import "../List.css";


const List = props => (
  
  <div className="list-group">
    {props.characters.map(item=>{ 
      return (
      <div key = {item.id}> <img  className = "character-img"key = {item.id} src = {item.image} alt = "character" /></div>
      );    
   })}
  </div>
);

export default List;
