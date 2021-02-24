import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Catalog from './components/Catalog';
import Item from './components/Item';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            <Catalog />
          </Route>
    
          <Route path="/item/:id">
            <Item />        
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
