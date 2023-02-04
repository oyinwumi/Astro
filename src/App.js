import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import AstroCard from './astro-card/AstroCard';
import Footer from './footer/Footer';
import Hero from './hero-section/Hero';
import Navbar from './nav-section/Navbar';
import Feature from './premium-features/Feature';
import SellGiftcard from './sell-giftcard/SellGiftcard';
import Testimony from './testimony/Testimony';

function App() {
  return (
    <div className="App ">
      
      <Router>
        <Routes>
          <Route path='/' element={<Navbar/>}/>
        </Routes>
      </Router>
      <Hero/>
      <AstroCard />
      <Feature/>
      <SellGiftcard />
      <Testimony />
      <Footer/>
    </div>
  );
}

export default App;
