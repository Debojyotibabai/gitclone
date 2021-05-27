import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// component
import SideNavbar from "./Component/SideNavbar";
import Overview from "./Component/Overview";
import Repositories from "./Component/Repositories";
import Stars from "./Component/Stars";
import Followers from "./Component/Followers";
import RepositoryDetails from "./Component/RepositoryDetails";

// css
import "./App.css";

const App = () => {
  return (
    <Router>
      {/* main section */}
      <div className="main__section">
        {/* side navbar */}
        <SideNavbar />

        {/* routes */}
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route exact path="/repositories" component={Repositories} />
          <Route exact path="/stars" component={Stars} />
          <Route exact path="/followers" component={Followers} />
          <Route
            exact
            path="/repositories/repositorydetails"
            component={RepositoryDetails}
          />
          <Redirect exact to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
