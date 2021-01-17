import React,{ Component } from 'react';

class List extends Component{
    render() {
        const Countries = ['Dhaka','Rajshahi','Chittagong','Rangpur'];
        const values = Countries.map((mycountry)=>{

            return(mycountry);

        });

        return (
            <div>
               <ul>{values}</ul>
            </div>
        );
    }
}

export default List;