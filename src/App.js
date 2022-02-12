import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MoviePage from './MoviePage/MoviePage';

function App() {
  return (
    <div className="App">
 
 <Router>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/details/:id" element={<MoviePage/>}/>
        </Routes>

    </Router>
    </div>
  );
}

export default App;
