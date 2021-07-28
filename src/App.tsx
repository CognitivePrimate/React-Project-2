import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePageSearch from './Components/HomePageSearch/HomePageSearch';

const API = process.env.REACT_APP_EDAMAM_API_KEY

function App() {

  console.log(API);
  return (
    <Router>

        <HomePageSearch/>
      
    </Router>
  );
}

export default App;

// SAVE FOR LATER? Application ID = 267596f9
