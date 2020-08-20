import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <AddTodo />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
