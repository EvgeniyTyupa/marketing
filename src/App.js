import React, { useEffect } from 'react';
import { Route, Router, BrowserRouter, Switch, Redirect } from "react-router-dom";
import './App.css';
import Main from './Components/Main/Main';

const App = (props) => {
  return(
    <BrowserRouter>
      <div className="main">
        <Switch>
          <Main/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
