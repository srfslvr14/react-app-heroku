import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
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