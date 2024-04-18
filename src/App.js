import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import HowToBuy from './HowToBuy';
import Roadmap from './Roadmap';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <HowToBuy />
      <Roadmap />
    </div>
  );
}

export default App;
