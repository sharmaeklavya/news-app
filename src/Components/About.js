import React from "react";
import { Switch, Route } from "react-router-dom";
import Background from "./About/Background";
import Pioneer from "./About/Pioneer";
import PrimeSuccess from "./About/PrimeSuccess";
import TrueJournalism from "./About/TrueJournalism";

function About({ match }) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-12">
          <h5 className="h5">About the Organization</h5>
        </div>
        <div className="col-md-4">
          <nav className="btn-group-vertical pt-3">
            <a
              href={`${match.url}/background`}
              className="btn about-btns border-warning mb-2"
            >
              Background
            </a>
            <a
              href={`${match.url}/pioneer-news`}
              className="btn about-btns border-warning mb-2"
            >
              Pioneer News
            </a>
            <a
              href={`${match.url}/true-journalism`}
              className="btn about-btns border-warning mb-2"
            >
              True Journalism
            </a>
            <a
              href={`${match.url}/prime-success`}
              className="btn about-btns border-warning"
            >
              PrimeTime Success
            </a>
          </nav>
        </div>
        <div className="col-md-8">
          <Switch>
            <Route
              path={`${match.path}/prime-success`}
              component={PrimeSuccess}
              exact
            />
            <Route
              path={`${match.path}/true-journalism`}
              component={TrueJournalism}
              exact
            />
            <Route
              path={`${match.path}/pioneer-news`}
              component={Pioneer}
              exact
            />
            <Route
              path={[`${match.path}/background`, "/about"]}
              component={Background}
              exact
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}
export default About;
