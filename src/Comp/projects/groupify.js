import React from "react";
import M from 'materialize-css'
import GroupifySS from "../../assests/groupify.png"

export default class AboutPage extends React.Component {

  componentDidMount() {
    M.AutoInit();
  } 

  render(){
    return ( 
        <div class="card hoverable small">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" alt="vector" src={GroupifySS} />
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                    Groupify
                    <i class="material-icons white right">more_vert</i>
                </span>
                <p><a target="_blank" href="https://shams.pythonanywhere.com/groupify">
                  Check it out!
                </a></p>
            </div>

            <div class="card-reveal">
              <i class=" card-title material-icons right">close</i>
              <br></br>
              <br></br>
              <span class="card-title grey-text text-darken-4">
                Groupify
                </span>
                <p>
                  Groupify is a website which builds upon the social aspects of the Spotify web player.
                  The site includes custom user profiles, a reccomendation system, and a group listen feature. 
                </p>
                <p><a target="_blank" href="https://shams.pythonanywhere.com/groupify">
                  Check it out!
                </a></p>
            </div>
        </div>
    );
  }
}

