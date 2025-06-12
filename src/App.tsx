import { Footer, Header } from './components/layout';
import {
  About,
  Contact,
  Hero,
  LeadMagnet,
  Process,
  Services,
  Showcase,
} from './components/sections';

function App() {
  return (
    <div className='min-h-screen'>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <LeadMagnet />
        <Process />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
