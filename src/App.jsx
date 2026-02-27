import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import CursorPebbles from './components/CursorPebbles';
import './App.css';

function App() {
  return (
    <div className="app">
      <CursorPebbles />
      <ScrollToTop />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
