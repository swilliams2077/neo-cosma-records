import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className = "container">
      <div className = "row">
        <div className = "col">
          <div className = "pageTitle">
            <h1> NEO <span id = "highlight">COSMA</span> RECORDS </h1>
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
        <div className =  "col-10 mx-auto">
         
          
          
          <div className = "card">
            <div className = "card-header">
              Featured
            </div>
            <div className = "card-body">
              <h5 className = "card-title">Special title treatment</h5>
              <p className = "card-text">With supporting text below as a natural lead-in to additional content.</p>
              <img src="https://rbma.imgix.net/EL-P-p081-RaphRashid-BTTL.4bbc8edd.jpg?auto=format&w=1280" class="img-fluid" alt="Responsive image"></img>
              <a href="#" className = "btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
