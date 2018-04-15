import React, {Component} from "react";
import "../List.css";

class List extends Component {
  state = {
    beenPicked:false,
    // counter = 0,
  }

  becomePicked = () =>{
    this.props.shuffle(this.props.characters);
    if(!this.state.beenPicked){
      this.setState({
        beenPicked: true,
        // counter: this.state.counter + 1,
      })
    } else {
      alert("You Lost!")
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
    </div>
    );
     
  }
 
} 
  
    

;

export default List;
