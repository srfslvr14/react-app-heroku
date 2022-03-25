import React from "react";
import M from 'materialize-css'
import cse160asg0 from "../../assests/cse160asg2.png"

export default class AboutPage extends React.Component {

  componentDidMount() {
    M.AutoInit();
  } 

  render(){
    return ( 
      <div class="card hoverable small">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" alt="vector" src={cse160asg0} />
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
                3D Charizard Animation 
                <i class="material-icons white right">more_vert</i>
            </span>
            <p><a target="_blank" href="https://people.ucsc.edu/~srfulgha/lab2/asg2.html">
              Check it out!
            </a></p>
        </div>

        <div class="card-reveal">
          <i class=" card-title material-icons right">close</i>
          <br></br>
          <br></br>
          <span class="card-title grey-text text-darken-4">
            3D Charizard Animation 
            </span>
            <p>
              A graphic project which displays a "blocky" Charizard in 3D. Charizard 
              has second and third level joints, and flys by flapping his wings, 
              which can be controlled with sliders.               
            </p>
            <p><a href="https://people.ucsc.edu/~srfulgha/lab0/asg0.html">
              Check it out!
            </a></p>
        </div>
      </div>
    );
  }
}

