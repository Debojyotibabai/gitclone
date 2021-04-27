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
          <Redirect exact to="/" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
