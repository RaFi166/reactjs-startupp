import React,{ Component } from 'react';


class Form extends Component {

    constructor(){
        super()
        this.state={
            value: " "
        }
    }

    onChangeHandler=(event)=>{
        var values =event.target.value;
        this.setState({value:values})
        
    }

    render(){
        return(
            <div>
                <h1>{this.state.value}</h1>
                <input type="text" onChange={this.onChangeHandler} placeholder="ENTER YOUR NAME HERE:"/> <br/> 
                <input type="submit" value="SUBMIT"/>
            </div>
        );
    }
}

export default Form;