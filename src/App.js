import React from 'react';
import './App.css';
import Nav from "./Nav";
import BookSearch from "./BookSearch";
import Home from "./Home";
import BookDetail from "./BookDetail";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const App = () => {

  return(
    <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/booksearch" exact component={BookSearch}/>
          <Route path="/booksearch/:id" component={BookDetail} />
        </Switch>
    </Router>
  )
}
  
export default App;
