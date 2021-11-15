import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Add from "./components/Add";
import Header from "./components/Header";
import Watched from "./components/Watched";
import WatchList from "./components/WatchList";

import "./App.scss";
import GlobalProvider from "./context/GlobalState";
import Card from "./components/Card";

function App() {

  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <WatchList  />
          </Route>

          <Route path="/Watched">
            <Watched  />
          </Route>

          <Route path="/Add">
            <Add/>
          </Route>

          <Route path="/:id" exact>
            <Card />
          </Route>

        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;

// 0dffa9cbec133e4908c290ef49559678
// https://api.themoviedb.org/3/movie/550?api_key=0dffa9cbec133e4908c290ef49559678
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGZmYTljYmVjMTMzZTQ5MDhjMjkwZWY0OTU1OTY3OCIsInN1YiI6IjYxNzY2ZDVjODk0ZWQ2MDA4ZTRhYTA0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YDXRnU5XKfssqgae0HOXfsNgnsd4KRZZgkwe6Jl8fow
