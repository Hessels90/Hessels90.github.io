import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../../Core/index";
import "./Page.css";
import { FrontPage, Rules, Winners, Participants } from "../";

// import firebase from "../../../middleware/Firebase/firebase";

// firebase.firestore().collection("times").add({
//   title: "Rubik's Cube",
//   time_seconds: 45,
// });

const Page = () => {
  return (
    <div className="container">
      <Navigation>
        <div style={{ display: "flex", justifyContent: "center" }}>
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
