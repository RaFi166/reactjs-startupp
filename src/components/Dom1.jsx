import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class Dom1 extends Component {

    doChange(){

        var container = document.getElementById("ishq");
        var element = <h1>I Love Sharmin 😍 </h1>
        ReactDom.render(element,container);


    }



    render() {
        return (
            <div>
                <h1 id="ishq">Who Do I Love?</h1>
                <button onClick={this.doChange}>Click for Answer</button>
            </div>
        )
    }
}
