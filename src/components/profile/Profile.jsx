import React from 'react';
import Bio from './Bio';
import Skill from './Skill';
import Social from './Social';


class Profile extends React.Component{

    render(){
        return (
            <div className="container">
               <Bio name='My Name is Rafi' job='I am a Python Developer'/>

               <Skill />

                <Social />

                <Bio name='my name is khan' job='I am a Fullstack Reactjs Developer!' />

               <Skill />

                <Social />
            </div>
        );
    }
}

export default Profile;