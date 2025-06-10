// src/components/Footer.tsx
import { Flex, Box, Link, Icon } from '@chakra-ui/react';

const vibrantAccent = "#81E7AF"; // Your defined vibrant accent color

// Re-use the DiagonalArrowIcon for consistency
const DiagonalArrowIcon = (props: any) => (
  <Icon
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7 17L17 7" />
    <path d="M17 7H9" />
    <path d="M17 7V15" />
  </Icon>
);

export default function Footer() {
  return (
    <Flex
      as="footer"
      py={{ base: 4, md: 6 }}
      px={{ base: 6, md: 12, lg: 16 }}
      justify="space-between"
      align="center"
      textAlign="center"
      fontSize={{ base: 'xs', md: 'sm' }}
      color="gray.600"
      opacity={0.7}
      userSelect="none"
      bg="rgba(0,0,0,0.8)" // Matching header background for consistency
      backdropFilter="blur(8px)"
      // Border color adjusted to match vibrantAccent's RGBA
      borderTop="1px solid rgba(129, 231, 175, 0.05)" // Subtle top border
      boxShadow="0 -2px 10px rgba(0,0,0,0.2)"
      // --- Changed to FIXED positioning ---
      position="fixed" // Now fixed to the viewport
      bottom="0"       // Sticks to the bottom edge
      left="0"         // Spans full width
      right="0"        // Spans full width
      zIndex="fixedFooter" // Use defined z-index from theme
      // Set height for consistent padding in main content
      height="var(--chakra-sizes-footerHeight)" // Use theme variable
    >
      <Box>
        © {new Date().getFullYear()} SangwanHQ. All rights reserved.
      </Box>
      <Link
        href="https://twitter.com/uditsangwan"
        isExternal
        display="flex"
        alignItems="center"
        fontSize={{ base: 'xs', md: 'sm' }}
        color="gray.500"
        _hover={{
          color: "white",
          textDecoration: 'none',
          '.diagonal-arrow-icon': { transform: 'translateX(2px) translateY(-2px)', color: "white" }
        }}
        transition="all 0.3s ease-out"
      >
        Udit Sangwan <DiagonalArrowIcon ml={1} boxSize={4} className="diagonal-arrow-icon" color="gray.500" />
      </Link>
    </Flex>
  );
}
