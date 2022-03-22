import React from "react";
import {
  BrowserRouter as 
    Router,
    Switch,
    Route,
} from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ResumePage from "./ContactPage";
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

          <Route path="/projects">
            <ProjectPage/>
          </Route>

          <Route path="/resume">
            <ResumePage/>
          </Route>

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