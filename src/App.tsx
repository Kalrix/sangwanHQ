import { Box, Flex } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { keyframes as emotionKeyframes } from '@emotion/react';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Page Components
import HeroSection from './pages/HeroSection';
import NTheoryPage from './pages/NTheoryPage';
import VenturesPage from './pages/VenturesPage';
import ApplyPage from './pages/ApplyPage';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

// Accent Color
const vibrantAccent = "#81E7AF";

// Background Animations
const nebulaShift = emotionKeyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
`;

const subtleGridPulse = emotionKeyframes`
  0% { transform: scale(1); opacity: 0.05; }
  50% { transform: scale(1.02); opacity: 0.08; }
  100% { transform: scale(1); opacity: 0.05; }
`;

export default function App() {
  return (
    <Flex
      direction="column"
      minH="100vh"
      bg="black"
      color="white"
      fontFamily="'Helvetica Neue', 'Arial', sans-serif"
      overflowX="hidden"
    >
      {/* Global Background Effects */}
      <Box
        position="fixed"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgImage={`
          radial-gradient(circle at 15% 15%, rgba(129, 231, 175, 0.05) 0%, transparent 60%),
          radial-gradient(circle at 85% 85%, rgba(129, 231, 175, 0.05) 0%, transparent 60%),
          radial-gradient(circle at 50% 10%, rgba(129, 231, 175, 0.03) 0%, transparent 70%),
          radial-gradient(circle at 20% 90%, rgba(129, 231, 175, 0.04) 0%, transparent 65%)
        `}
        backgroundSize="200% 200%"
        animation={`${nebulaShift} 60s linear infinite alternate`}
        zIndex="0"
        filter="blur(30px)"
        opacity="0.8"
      />
      <Box
        position="fixed"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="repeating-linear-gradient(0deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px),
             repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 60px)"
        opacity="0.05"
        zIndex="0"
        animation={`${subtleGridPulse} 10s ease-in-out infinite alternate`}
        filter="blur(1px)"
      />

      {/* Header */}
      <Header />

      {/* Main App Content */}
      <Box
        as="main"
        flex="1"
        position="relative"
        zIndex="content"
        pt="var(--chakra-sizes-headerHeight)"
        pb="var(--chakra-sizes-footerHeight)"
      >
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/n-theory/*" element={<NTheoryPage />} />
          <Route path="/ventures" element={<VenturesPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Box>

      {/* Footer */}
      <Footer />
    </Flex>
  );
}
