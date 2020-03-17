import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
    return(
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatibus rem tempore minus, voluptate soluta, ullam non laborum dolor animi ab inventore, voluptates dolorem omnis at nulla provident nemo molestiae.</p>
        </div>
    );
}

export default Rainbow(About);