import React from 'react';

class becomePicked extends React.Component{
    
    state = {
        beenPicked: false
    }

    becomePicked = () =>{
        this.setState({
            beenPicked: true,
        })
    }

    render(){
        return(

            <div onClick = {this.becomePicked}> 
                <List
                    id = {this.characters.id}
                    name = {this.characters.name}
                    image = {this.characters.image}
                    picked = {this.characters.picked}
                />
            </div>
        )
    }
}