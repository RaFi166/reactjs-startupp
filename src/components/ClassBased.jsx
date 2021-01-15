import { render } from '@testing-library/react';
import React,{Component} from 'react';

class ClassBased extends Component{

    doThisAgain(){
        alert("thanks for the click again");
    }

    render(){
        return (

        <div>
            <h1>This is classbased  </h1>
            <button onClick={this.doThisAgain}>Click me again!</button>
        </div> 
        
        );
        
    }
}

export default ClassBased;