import React from 'react';
import './App.css';
import Result from './Result';
import Order from './OrderComponent/Order';
import Header from './components/Header';
import Cart from './cardComponent/Cart';
import OrderCompleted from './OrderComponent/OrderCompleted'



function App() {
  
  return (
    <>
      <div className="sitePosition">
        <Header/>
        <Result />
        <Cart/>
        <Order />
        <OrderCompleted/>
      </div>
    </>
  );
}

export default App;
