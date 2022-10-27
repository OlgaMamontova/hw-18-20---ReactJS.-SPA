import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home';
import Publications from './components/Publications';
import Photos from './components/Photos';
import Contacts from './components/Contacts';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="App">
       <Router>
        <Header></Header>
          <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/publications'  component={Publications} />
              <Route path='/photos' component={Photos} />
              <Route path='/contacts' exact component={Contacts} />
              <Route path='/contacts/:id' component={ContactInfo} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
