import React from 'react';

const doThis=(a)=>{

    alert(a);

}


const ArrowFunc=()=>{
    return(
        <div>
            <h1>Please click the button</h1>
            <button onClick={doThis.bind(this,"thanks for the click")}>Click me!</button>
            
        </div>
    );
}
export default ArrowFunc;