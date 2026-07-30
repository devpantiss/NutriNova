import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Impact from './pages/Impact';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NutritionBasket from './pages/NutritionBasket';
import AnganwadiTraining from './pages/AnganwadiTraining';
import AIAnganwadi from './pages/AIAnganwadi';

// ScrollToTop helper to reset viewport coordinates on route switch and support anchor scrolls
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 90;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Premium Navigation Header */}
      <Navbar />

      {/* Main Content Layout */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<Programs />} />
          <Route path="/what-we-do/nutrition-basket" element={<NutritionBasket />} />
          <Route path="/what-we-do/anganwadi-training" element={<AnganwadiTraining />} />
          <Route path="/what-we-do/ai-anganwadi" element={<AIAnganwadi />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Premium Footer */}
      <Footer />
    </Router>
  );
}
