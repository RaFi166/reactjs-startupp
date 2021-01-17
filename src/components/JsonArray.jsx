import React, { Component } from 'react'

class JsonArray extends Component {

    render() {
        const Countries = [
            {
                name : "Rafi",
                age : "24",
            },

            {
                name : "Bappy",
                age : "26"
            },
            {
                name : "nezam",
                age : "50",
            }
        ];

        const allCountries = Countries.map((coun)=>{
            return (
                <option>{coun.name}</option>
            );
        });

        return (
            <select>{allCountries}</select>    
        );
    }
}
export default JsonArray;