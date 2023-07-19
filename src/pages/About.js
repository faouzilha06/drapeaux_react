import React from 'react';
import logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <logo />
            <Navigation/>
            <h1>A propos</h1>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quo suscipit nostrum placeat officia quibusdam odit delectus ad velit at!
            </p>
            <br />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, quam.</p>
        </div>
    );
};

export default About;