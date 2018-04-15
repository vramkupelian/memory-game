import React, {Component} from "react";
import "../List.css";

class List extends Component {
  state = {
    beenPicked:false,
  }

  becomePicked = () =>{
    this.props.shufflePlusOne(this.props.characters);
    if(!this.state.beenPicked){
      this.setState({
        beenPicked: true,  
      })
    } 
    else {
      alert("You Lost!"),
      this.props.handleLoss();
      // this.setState({beenPicked:false});
      // document.location.reload();
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
        id={this.props.id}
      />
    </div>
    );    
  }
};

export default List;
