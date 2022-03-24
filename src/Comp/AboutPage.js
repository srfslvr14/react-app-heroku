import React from "react";

import MyStory from './aboutSites/MyStory.js'

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      StoryPage: true,
    };
    this.gotoStory = this.gotoStory.bind(this);
    this.gotoExper = this.gotoExper.bind(this);
  }


  gotoStory(){
    this.setState({
      StoryPage: true,
    });
  }

  gotoExper(){
    this.setState({
      StoryPage: false,
    });
  }

  render(){
    return ( 
      <div>
        <MyStory/> 
      </div>
    );
  }
}

