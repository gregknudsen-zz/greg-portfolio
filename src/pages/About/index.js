import React from 'react';
import { Jumbotron } from 'reactstrap';


const About = () => {
  return(
    <div className="container mt-3">
       <Jumbotron>
        <h1 className="display-3">About Me</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
       
      </Jumbotron>
    </div>
  ) 
}

export default About;