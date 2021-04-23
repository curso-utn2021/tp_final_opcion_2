
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Home from './Home.jsx';
import Personas from './plantillas/Personas.jsx'
import AgregarPersonas from './plantillas/AgregarPersona'
function App() {

 

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/Personas" component={Personas} />
          <Route exact path="/AgregarPersona" component={AgregarPersonas} />
        </Router>
      </header>
    </div>
  );
}

export default App;
