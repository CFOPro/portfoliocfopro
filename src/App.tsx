import React from 'react';
import { Header, Footer } from './components/layout';
import { Hero, About, Services, Contact } from './components/sections';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
