import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className = "container">
      <div class = "row">
        <div class = "col">
          <div className = "pageTitle">
            <h1> NEO COSMA RECORDS </h1>
            <h2>alternative internet label</h2>
            <p> choose your weapon: </p>
          </div>
          
          {/* this can be its own component. */}
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link" href="#">Music</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Visuals</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Artists</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className = "row">
        <h1>content</h1>
      </div>
    </div>
    
  );
}

export default App;
