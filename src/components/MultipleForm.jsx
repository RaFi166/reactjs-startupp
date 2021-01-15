import React,{Component} from 'react';

class MultipleForm extends Component{

    constructor(){
        super()
        this.state={
            fname : ' ',
            lname : ' ',
            email : ' ',
            mobile : ' ',


        }
    }


    onChangeHandler=(event)=>{
      var allName = event.target.name;
      var vaaalues = event.target.value;
      this.setState(
          {
              [allName] : [vaaalues]
          }
      );

    }

    onSubmitHandler(){
        alert("Thanks for the submission");
    }

    render(){
        return(

            <div>
                <form action="" onSubmit={this.onSubmitHandler}>
                    <h4>{this.state.fname}</h4>
                    <h4>{this.state.lname}</h4>
                    <h4>{this.state.email}</h4>
                    <h4>{this.state.mobile}</h4>
                    <input onChange={this.onChangeHandler} type="text" name="fname" placeholder="Enter your name"/> <br/>
                    <input onChange={this.onChangeHandler} type="text" name="lname" placeholder="Enter your name"/> <br/>
                    <input onChange={this.onChangeHandler} type="email" name="email" placeholder="Enter your name"/> <br/>
                    <input onChange={this.onChangeHandler} type="text" name="mobile" placeholder="Enter your name"/> <br/>
                    <input  type="submit" name="submit" value="Submit"/> <br/>
                </form>
            </div>

        );
    }

}

export default MultipleForm;