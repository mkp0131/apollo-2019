import React from "react";
import { Switch, Route, BrowserRouter as Router  } from "react-router-dom";
import { Reset } from 'styled-reset'
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <>
      <Reset />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Detail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
