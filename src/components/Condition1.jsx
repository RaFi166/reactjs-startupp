import React, { Component } from 'react'


class Condition1 extends Component {
    constructor(){
        super()
        this.state={
            login : false,
        }
    }
    render() {
        // if(this.state.login==true){
        //     return(
        //         <button>Logout</button>
        //     )
        // }
        //     else{
        //         return(
        //             <button>Welcome</button>
        //         );
        //     }

        return(
            this.state.login? <button>Logout</button> :  <button>Welcome</button>
        );

        
    }
}

export default Condition1;
