import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className = "container">
      <div className = "row">
        <div className = "col">
          <div className = "pageTitle">
            <h1> NEO COSMA RECORDS </h1>
            <h2>alternative internet label</h2>
            <p> choose your weapon: </p>
          </div>
          
          {/* this can be its own component. */}
          <ul className = "nav border justify-content-center">
            <li className = "nav-item">
              <a className = "nav-link navBlack" href = "#">Music</a>
            </li>
            <li className = "nav-item">
              <a className = "nav-link navBlack" href = "#">Visuals</a>
            </li>
            <li className = "nav-item">
              <a className = "nav-link navBlack" href = "#">Artists</a>
            </li>
            <li className = "nav-item">
              <a className = "nav-link navBlack" href = "#">Merchandise</a>
            </li>
            <li class = "nav-item">
              <a class = "nav-link navBlack" href = "#">About</a>
            </li>
            <li class = "nav-item">
              <a class = "nav-link navBlack" href = "#">Services</a>
            </li>
            <li class = "nav-item">
              <a class = "nav-link navBlack" href = "#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className = "row">
        <div className = "col">
        <h1>content</h1>
        </div>
      </div>
    </div>
    
  );
}

export default App;
