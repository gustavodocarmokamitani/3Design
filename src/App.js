import React from 'react';
import './App.scss';
import './components/Fonts.scss';
import './components/_variables.scss';

// https://99designs.com.br/inspiration/websites/3d


import NavBar from './components/NavBar';
import Body from './components/Body';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
