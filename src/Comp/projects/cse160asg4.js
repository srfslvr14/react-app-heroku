import React from "react";
import M from 'materialize-css'
import cse160asg4 from "../../assests/cse160asg4.png"

export default class AboutPage extends React.Component {

  componentDidMount() {
    M.AutoInit();
  } 

  render(){
    return ( 
      <div class="card small">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" alt="vector" src={cse160asg4} />
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
                Solar System Lighting 
                <i class="material-icons white right">more_vert</i>
            </span>
            <p><a target="_blank" href="https://people.ucsc.edu/~srfulgha/lab4/asg4.html">
              Check it out!
            </a></p>
        </div>

        <div class="card-reveal">
          <i class=" card-title material-icons right">close</i>
          <br></br>
          <br></br>
          <span class="card-title grey-text text-darken-4">
            Solar System Lighting 
            </span>
            <p>
              A graphic project which renders a traversable solar system. Users 
              can move and look around, in addition enjoying the scenery of the sun reflecting
              off of the planets.
            </p>
            <p><a target="_blank" href="https://people.ucsc.edu/~srfulgha/lab4/asg4.html">
              Check it out!
            </a></p>
        </div>
      </div>
    );
  }
}

