import React,{Component} from 'react';

class State extends Component{

    constructor(){
        super()
        this.state={
            name: "Hello rafi",
            age: 24,
        }
    }

    render(){
        return(

            <div>

            <h2>{this.state.name}</h2>
            <h2>{this.state.age}</h2>
            </div>

        );

    }
    
}
export default State;