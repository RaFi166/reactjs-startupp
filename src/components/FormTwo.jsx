import React,{Component} from 'react';


class FormTwo extends Component {

    constructor(){
        super()
        this.state={
            value : ' '
        }
    }


    onChangehandler=(event)=>{
        var vaalues = event.target.value;
        this.setState({ value : vaalues});
    }

    onSubmitHandler=()=>{
        alert(this.state.value);
    }

    render(){
        return(
            <div>
            <form action="" onSubmit={this.onSubmitHandler}>
                <h2>{this.state.value}</h2>
                <input type="text" onChange={this.onChangehandler} placeholder="Enter your name here:"/> <br/>
                <input type="submit" value="SUBMIT HERE"/>

            </form>
            </div>

        );
    }
}

export default FormTwo;