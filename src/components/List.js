import React, {Component} from "react";
import "../List.css";

class List extends Component {
  state = {
    beenPicked:false
  }

  becomePicked = () =>{
    this.props.shuffle(this.props.characters);
    if(!this.state.beenPicked){
      this.setState({
        beenPicked: true,
      })
    } else {
      console.log('Bad')
    }

  }

  render(){
    return(
      <div className="img-container">
      <img 
        className='character-img' 
        onClick ={this.becomePicked} 
        alt={this.props.name} 
        src={this.props.image} 
      />

      {/* onClick ={()=>props.beenPicked(props.id)} */}
    {/* <span onClick ={()=>props.removeFriend(props.id)} className="remove">𝘅</span> */}
    </div>
    );
     
  }
 
} 
  
    

;

export default List;
