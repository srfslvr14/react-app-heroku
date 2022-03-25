import React from "react";
import M from 'materialize-css'
import cse160asg3 from "../../assests/cse160asg3.png"

export default class AboutPage extends React.Component {

  componentDidMount() {
    M.AutoInit();
  } 

  render(){
    return ( 
      <div class="card small">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" alt="vector" src={cse160asg3} />
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
                Volcano Island 
                <i class="material-icons white right">more_vert</i>
            </span>
            <p><a target="_blank" href="https://people.ucsc.edu/~srfulgha/lab3/asg3.html">
              Check it out!
            </a></p>
        </div>

        <div class="card-reveal">
          <i class=" card-title material-icons right">close</i>
          <br></br>
          <br></br>
          <span class="card-title grey-text text-darken-4">
            Volcano Island
            </span>
            <p>
              A graphic project which renders an entire traversable island. Users 
              can move around the island, turn in either direction, and jump up and down 
              using keys as button inputs.
            </p>
            <p><a target="_blank" href="https://people.ucsc.edu/~srfulgha/lab3/asg3.html">
              Check it out!
            </a></p>
        </div>
      </div>
    );
  }
}

