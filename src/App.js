import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Routes from './routes';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes />
      <Footer />
      <ScrollToTop />
    </Router>
  );
};

export default App;
