import React from "react";

import hikePhotoSq from '../assests/IMG_0211.JPG'
import hikePhotoBn from '../assests/castlerock.JPG'
import M from 'materialize-css'

export default class AboutPage extends React.Component {

  componentDidMount() {
    M.AutoInit();
  } 

  render(){
    return ( 
      <div class="container">
        <p class="h1 center aboutTitle"> I'm a California-based hopeful </p>

        <div class="carousel">
          <a class="carousel-item" href="#one!"><img src={hikePhotoSq}/></a>
          <a class="carousel-item" href="#two!"><img src={hikePhotoBn}/></a>
          <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3"/></a>
          <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
          <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
        </div>
        
        {/* personality, goals, etc */}
        <p class="aboutIntro">
          Give more love than you take. In every aspect of my life, both professonal and personal,
          I try to live by this saying. 
          
          I have a curiosity to explore new challenges, and the drive to put my all into 
          new projects. In everything I'm a part of, I attempt to give back the care, knowlegde, and 
          support that I have been given tenfold, and take advantage of my experiences to create
          things which inspire others -- whether it be through a medium of software development,
          art, or simply by being a positive version of myself. It is this mentality which
          has led my involvement in event organization, fueled my tutoring and instructing experiences,
          and acted as inspiration towards my software products.
        </p>

        {/* upbringing */}
        <p class="aboutIntro">
          Raised in Stockton, California, I grew up surrounded by diveristy. Seeing so many 
          varying cultures, people, and personalities helped me become the person I am today.
          I attended Bear Creek High School, where we celebrated the diverse nature of Stockton
          to its fullest extent, putting on pep rallies and performances showcasing all of the 
          culture packed into our city. I carried the values and lessons Stockton gave along with me
          when I moved to attend the University of California, Santa Cruz, and study Computer Science 
          and Mathematics.
        </p>

        {/* hobbies, outside of work, dnd, hiking, beaches, family*/}
        <p class="aboutIntro">
          Outside of school and work, I enjoy spontaneous hiking the gorgeous mountains of 
          California, exploring the beaches of Santa Cruz, and visiting my extended family in 
          Stockton and Portland. For fun, I spend my time playing Dungeons and Dragons with 
          my friends, participating in weekly trivia nights, and producing digital art. I also enjoy 
          playing video games, with my favorites being League of Legends, The Last of Us, and Pokémon.
        </p>

        {/* currently */}
        <p class="aboutIntro">
          These days, I'm begining to wrap up my college experience in Santa Cruz with a Bachelor's 
          Degree in Computer Science with a minor in Mathematics as part ofe class of 2022. 
          My university career has been geared towards gaining experience towards the software development Scrum and Agile process, 
          computer graphics, and web application deisgn. 
          I've discovered my passion for coding thanks to my professors and friends, and am nurturing that passion
          by participating in Hackathons, designing personal projects in my free time, and 
          by fully embracing the software development environment via an internship-like 
          college course. I have been heavily invloved in the 
          MEP and MESA programs on campus, which has offered many resources and support towards my 
          education. I am currently searching for a position as a software developer or software
          engineer, and am excited to make a change of my own towards tomorrow's technology.
        </p>
        <p>
          I am ecstatic to graduate this coming spring, and to enter the workforce as 
          a software developer or software engineer (if you're interested in my abilities, 
          feel free to contact me!).
        </p>
      </div>

    );
  }
}

