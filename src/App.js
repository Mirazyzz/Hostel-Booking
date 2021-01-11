import React from 'react';
import './App.css';
import Home from './pages/Home';
import SingleRoom from './pages/SingleRoom';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
    </>
  );
}

//<Route exact component={Error} />

export default App;
