import React from "react";

const List = props => (
  
  <div className="list-group">
    {props.characters.map(item=>{ 
      return (
      <div key = {item.id}> <img key = {item.id} src = {item.image} alt = "character" /></div>
      );    
   })}
  </div>
);

export default List;
