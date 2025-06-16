import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Page Components
import HeroSection from './pages/HeroSection';
import AtomLoop from './pages/AtomLoop';
import VenturesPage from './pages/VenturesPage';
import ApplyPage from './pages/ApplyPage';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

export default function App() {
  return (
    <Box bg="black" color="white" fontFamily="'Helvetica Neue', 'Arial', sans-serif">
      {/* Header */}
      <Header />

      {/* Scrollable Content */}
      <Box
        as="main"
        minHeight="100vh"
        pb="64px" // match footer height so content doesn't hide under it
        pt="64px" // if you have a fixed header, adjust accordingly
        position="relative"
        zIndex={1}
      >
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/n-theory/*" element={<AtomLoop />} />
          <Route path="/ventures" element={<VenturesPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Box>

      {/* Always-visible Fixed Footer */}
      <Footer />
    </Box>
  );
}
