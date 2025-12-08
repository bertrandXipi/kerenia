import React from 'react';
import { BrowserRouter, useRoutes, useLocation, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Apartments from './pages/Apartments';
import Surroundings from './pages/Surroundings';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import PageTransition from './components/PageTransition';
import { AnimatePresence } from 'framer-motion';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Route configuration using useRoutes hook for better stability with animations
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  
  // Pass location explicitly to useRoutes to ensure the exiting route 
  // retains its context during the animation
  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/appartements", element: <Apartments /> },
    { path: "/galerie", element: <Gallery /> },
    { path: "/autour-de-nous", element: <Surroundings /> },
    { path: "/contact", element: <Contact /> },
    { path: "*", element: <Navigate to="/" replace /> }
  ], location);

  if (!element) return null;

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        {element}
      </PageTransition>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;