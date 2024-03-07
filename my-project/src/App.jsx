import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contactform from './components/Contactform';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Contactform />
      <Footer />
    </div>
  );
}

export default App;