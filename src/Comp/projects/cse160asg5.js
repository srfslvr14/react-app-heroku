import React from "react";
import M from 'materialize-css'
import cse160asg5 from "../../assests/cse160asg5.png"

export default class AboutPage extends React.Component {

  componentDidMount() {
    M.AutoInit();
  } 

  render(){
    return ( 
      <div class="card hoverable small">
        <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" alt="vector" src={cse160asg5} />
        </div>
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">
                Dungeons and Dragons Combat
                <i class="material-icons white right">more_vert</i>
            </span>
            <p><a target="_blank" href="https://people.ucsc.edu/~srfulgha/lab5/asg5.html">
              Check it out!
            </a></p>
        </div>

        <div class="card-reveal">
          <i class=" card-title material-icons right">close</i>
          <br></br>
          <br></br>
          <span class="card-title grey-text text-darken-4">
            Dungeons and Dragons Combat 
            </span>
            <p>
              A graphic project which uses Three.js to render a combat encounter 
              in a game of Dungeons and Dragons. You can explore the player's figures, their dice, 
              and a powerful dragon protecting its hoard.
            </p>
            <p><a target="_blank" href="https://people.ucsc.edu/~srfulgha/lab5/asg5.html">
              Check it out!
            </a></p>
        </div>
      </div>
    );
  }
}

