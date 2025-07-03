import {
  Box,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody
} from '@chakra-ui/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './pages/HeroSection';
import BlogPage from './pages/Blog';
import CaseStudy from './pages/CaseStudy'; // ✅ new import

export default function App() {
  const location = useLocation();
  const isBlogPage = location.pathname === "/blog";

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (isBlogPage) {
      onOpen();
    }
  }, [isBlogPage]);

  return (
    <Box
      bg={isBlogPage ? "white" : "black"}
      color={isBlogPage ? "gray.800" : "white"}
      fontFamily="'Helvetica Neue', 'Arial', sans-serif"
      minHeight="100vh"
    >
      <Header openOnLoad={isBlogPage} />

      <Box as="main" pt="0px" pb="0px">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/case-study" element={<CaseStudy />} /> {/* ✅ new route */}
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
}
