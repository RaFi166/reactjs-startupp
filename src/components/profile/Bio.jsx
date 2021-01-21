import React from 'react';


const Bio = props => {
    return(
        <div className="bio">
        <h1>{props.name}</h1>
        <h3>{props.job}</h3>
    </div>
    );
}

export default Bio;