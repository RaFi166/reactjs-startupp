import React from 'react';

function doThis(){
    alert("thanks for the click");
}

function Functional(){
    return(
        <div>
        <button onClick={doThis}>Click Me!</button>
        <h1>Hello click to see something</h1>
        </div>
       
    );
}
export default Functional