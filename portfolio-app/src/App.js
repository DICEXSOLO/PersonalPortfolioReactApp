import logo from './logo.svg';
// import './App.css';
import './dark-theme.css';
import React from 'react';
import Header from './components/Header';
import Projects from './components/projects';


function App() {
  return (
    <div className="App">
      <Header />
      <Projects/>
    </div>
  );
}

export default App;
