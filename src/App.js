import React from 'react';
import './App.css';
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';


function App() {
  return (
    <body>
      <div className="wrapper">
        <Header/>
      </div>
      <div>
        <Footer/>
      </div>
    </body>
  );
}

export default App;
