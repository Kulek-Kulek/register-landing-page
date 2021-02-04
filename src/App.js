import React from 'react';

import Header from './Components/Header/Header';
import Benefits from './Components/Benefits/Benefits';
import HowToOrder from './Components/HowToOrder/HowToOrder';
import QA from './Components/QA/QA';
import Contact from './Components/Contact/Contact';
import Footer from './Shared/Components/Footer/Footer';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className='main'>
        <Benefits />
        <HowToOrder />
        <QA />
        {/* <Contact /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}

export default App;
