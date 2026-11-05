import { lazy, Suspense, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const pageLoaders = [];

function lazyPage(load) {
  pageLoaders.push(load);
  return lazy(load);
}

const About = lazyPage(() => import('./pages/About'));
const Programs = lazyPage(() => import('./pages/Programs'));
const Impact = lazyPage(() => import('./pages/Impact'));
const Gallery = lazyPage(() => import('./pages/Gallery'));
const Contact = lazyPage(() => import('./pages/Contact'));
const NutritionBasket = lazyPage(() => import('./pages/NutritionBasket'));
const AnganwadiTraining = lazyPage(() => import('./pages/AnganwadiTraining'));
const AIAnganwadi = lazyPage(() => import('./pages/AIAnganwadi'));

const SITE_NAME = 'NutriNova';
const DEFAULT_TITLE = 'NutriNova - Transforming Nutrition & Child Development Through Innovation';

// Single source of truth for pages: URL, component and browser tab title
const routes = [
  { path: '/', element: <Home />, title: null },
  { path: '/about', element: <About />, title: 'About Us' },
  { path: '/what-we-do', element: <Programs />, title: 'What We Do' },
  { path: '/what-we-do/nutrition-basket', element: <NutritionBasket />, title: 'Nutrition Basket Initiative' },
  { path: '/what-we-do/anganwadi-training', element: <AnganwadiTraining />, title: 'Anganwadi Training Program' },
  { path: '/what-we-do/ai-anganwadi', element: <AIAnganwadi />, title: 'AI Anganwadi Project' },
  { path: '/impact', element: <Impact />, title: 'Our Impact' },
  { path: '/gallery', element: <Gallery />, title: 'Media Gallery' },
  { path: '/contact', element: <Contact />, title: 'Contact Us' },
];

// Preload all pages shortly after the first page has loaded,
// so navigating later is as instant as before.
function usePreloadPages() {
  useEffect(() => {
    const timer = setTimeout(() => pageLoaders.forEach((load) => load()), 2000);
    return () => clearTimeout(timer);
  }, []);
}

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

// Updates the browser tab title whenever the page changes
function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = routes.find((route) => route.path === pathname)?.title;
    document.title = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  }, [pathname]);

  return null;
}

export default function App() {
  usePreloadPages();

  return (
    <Router>
      <ScrollToTop />
      <PageTitle />
      <Navbar />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

        <Suspense fallback={<main style={{ minHeight: '100vh' }} />}>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </Router>
  );
}
