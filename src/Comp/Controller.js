import React from "react";
import {
  BrowserRouter as 
    Router,
    Switch,
    Route,
} from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ExpPage from './MyExper.js'
import ContactPage from "./ContactPage";
import ProjectPage from "./ProjectPage";


export default function Controller() {
  return (
      <div>
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>

          <Route path="/experience">
            <ExpPage/>
          </Route>

          <Route path="/projects">
            <ProjectPage/>
          </Route>

          {/* Resume tag on navbar links directly to resume.pdf */}
          
          <Route path="/contact">
            <ContactPage/>
          </Route>

          <Route path="/">
            <HomePage/>
          </Route>

        </Switch>
      </div>

  );
}