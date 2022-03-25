import React from "react";
import M from 'materialize-css'
import PawfectSS from "../../assests/pawfect.png"

export default class AboutPage extends React.Component {

  componentDidMount() {
    M.AutoInit();
  } 

  render(){
    return ( 
        <div class="card hoverable small">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" alt="vector" src={PawfectSS} />
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                    Pawfect Match
                    <i class="material-icons white right">more_vert</i>
                </span>
                <p><a target="_blank" href="https://github.com/srfslvr14/PawfectMatch">
                  Check it out!
                </a></p>
            </div>

            <div class="card-reveal">
              <i class=" card-title material-icons right">close</i>
              <br></br>
              <br></br>
              <span class="card-title grey-text text-darken-4">
                Pawfect Match
                </span>
                <p>
                  Pawfect Match is a website designed to help people find adoptable dogs
                  in their area, similar to a swipable dating app. Pawfect Match is not currently
                  online, but a demo video is available on github.
                </p>
                <p><a target="_blank" href="https://github.com/srfslvr14/PawfectMatch">
                  Check it out!
                </a></p>
            </div>
        </div>
    );
  }
}

