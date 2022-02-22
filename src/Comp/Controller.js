import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from "./Home/HomePage";
import AboutPage from "./About/AboutPage";
import ContactPage from "./Contact/ContactPage";
import ProjectPage from "./Projects/ProjectPage";

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

          <Route path="/">
            <ContactPage/>
          </Route>

          <Route path="/">
            <HomePage/>
          </Route>

        </Switch>
      </div>

  );
}