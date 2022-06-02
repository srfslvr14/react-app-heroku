import React from "react";
import M from 'materialize-css'
import LMLss from "../../assests/lmlsn-logo.png"

export default class AboutPage extends React.Component {

  componentDidMount() {
    M.AutoInit();
  } 

  render(){
    return ( 
        <div class="card hoverable small">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" alt="vector" src={LMLss} />
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                    Marine Debris Data Visualization Tool
                    <i class="material-icons white right">more_vert</i>
                </span>
                <p><a href="https://lml-marine-debris.herokuapp.com/">
                  Check it out!
                </a></p>
            </div>

            <div class="card-reveal">
              <i class=" card-title material-icons right">close</i>
              <br></br>
              <br></br>
              <span class="card-title grey-text text-darken-4">
                Marine Debris Data Visualization Tool
                </span>
                <p>
                  The LML Marine Debris Data Visualization Tool is a website 
                  with the goal on informing visitors of the impact of marine debris 
                  on the beaches of Santa Cruz by displaying collected data associated to each location.
                </p>
                <p><a href="https://lml-marine-debris.herokuapp.com/">
                  Check it out!
                </a></p>
            </div>
        </div>
    );
  }
}

