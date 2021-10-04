import React from 'react';
import './App.css';
import Header from './components/Header';
import CalzonealForno from './components/CalzonealForno';
import Diabola from './components/Diabola';
import Peperoni from './components/Peperoni';
import Havaii from './components/Havaii';
import Capricciosa from './components/Capricciosa';
import QuattroFormaggi from './components/QuattroFormaggi';

function App() {
  return (
    <><Header></Header>
      <div className="pizzaPosition">
      <CalzonealForno></CalzonealForno>
      <Diabola></Diabola>
      <Peperoni></Peperoni>
      <Havaii></Havaii>
      <Capricciosa></Capricciosa>
      <QuattroFormaggi></QuattroFormaggi>
      </div>      
    </>
  );
}

export default App;
