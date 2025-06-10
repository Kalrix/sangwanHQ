// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';

const vibrantAccent = "#81E7AF"; // Ensure this matches your color in other files

const theme = extendTheme({
  styles: {
    global: {
      'html, body, #root': {
        height: '100%', // Ensure html, body, and root div take full height
        margin: 0,
        padding: 0,
      },
      body: {
        overflowY: 'scroll', // Explicitly enable scrolling for the entire body
        overflowX: 'hidden', // Prevent horizontal scroll
        // Optional: Smooth scrolling for hash links
        scrollBehavior: 'smooth',
      },
    },
  },
  // Define custom sizes for header and footer to use in padding calculations
  sizes: {
    headerHeight: '80px', // Approximate height of your header
    footerHeight: '60px', // Approximate height of your footer
  },
  // Define z-indices for layering
  zIndices: {
    base: 1,
    content: 10,       // For main page content
    fixedHeader: 100,  // Higher for header
    fixedFooter: 90,   // Slightly lower than header but still fixed
    // ... other z-indices as needed
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
