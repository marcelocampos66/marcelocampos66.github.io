import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/projects" component={ Projects } />
      <Route path="/contacts" component={ Contacts } />
    </Switch>
  );
}

export default App;
