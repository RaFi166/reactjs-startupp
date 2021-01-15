import React,{Component} from 'react';

class SetState extends Component {

    constructor(){

        super()
        this.state={
            name: "rafi",
            age: ["24","25","26"],
            address: {
                address1 : "Uttara" ,
                address2 : "valuka",
                address3:"tangail",
            }
        }
    }
    doThis(a){
        this.setState({
            name: a,
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age[1]}</h1>
                <h2>{this.state.address.address1} </h2>
                <button onClick={this.doThis.bind(this,"bappy")}>Click me </button>
            </div>
        );
    }
}

export default SetState;