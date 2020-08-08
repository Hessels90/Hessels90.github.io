import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../../Core/index";
import "./Page.css";
import { FrontPage, Rules, Winners, Participants } from "../";

const Page = () => {
  return (
    <div className="container">
      <Navigation>
        <div>
          <Router>
            <Switch>
              <Route exact path="/">
                <FrontPage />
              </Route>
            </Switch>

            <Switch>
              <Route exact path="/participants">
                <Participants />
              </Route>
            </Switch>

            <Switch>
              <Route exact path="/winners">
                <Winners />
              </Route>
            </Switch>

            <Switch>
              <Route exact path="/rules">
                <Rules />
              </Route>
            </Switch>
          </Router>
        </div>
      </Navigation>
    </div>
  );
};

export default Page;