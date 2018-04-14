import React from "react";
import "../List.css";
import App from '../App';

const List = props => (
  
    <div className="img-container">
      <img className = 'character-img' alt={props.name} src={props.image} />
      {/* onClick ={()=>props.beenPicked(props.id)} */}
    {/* <span onClick ={()=>props.removeFriend(props.id)} className="remove">𝘅</span> */}
  </div>

);

export default List;
