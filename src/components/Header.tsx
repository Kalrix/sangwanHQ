// src/components/Header.tsx
import { Box, Flex, Heading, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const accentColor = "#5894FF";  // Steel blue
const glowColor = "#93A3DA";    // Subtle glow blue
const textColor = "#C9D1D9";    // Muted text gray-blue

export default function Header() {
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      px={{ base: 6, md: 12, lg: 16 }}
      py={{ base: 4, md: 6 }}
      bg="rgba(0,0,0,0.8)"
      backdropFilter="blur(10px)"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="fixedHeader"
      borderBottom="1px solid rgba(111, 143, 201, 0.2)"
      boxShadow="0 2px 20px rgba(0,0,0,0.5)"
      height="var(--chakra-sizes-headerHeight)"
    >
      <Heading
        as={RouterLink}
        to="/"
        fontWeight="medium"
        fontSize={{ base: 'xl', md: '2xl' }}
        userSelect="none"
        color={accentColor}
        letterSpacing="0.05em"
        _hover={{ textDecoration: 'none', opacity: 0.85 }}
      >
        SangwanHQ
      </Heading>

      <Flex as="nav" align="center" gap={{ base: 4, md: 8 }}>
        <Link
          as={RouterLink}
          to="/n-theory"
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight="normal"
          color={textColor}
          _hover={{ color: accentColor, textDecoration: 'none' }}
        >
          Atom Loop
        </Link>

        <Link
          as={RouterLink}
          to="/ventures"
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight="normal"
          color={textColor}
          _hover={{ color: accentColor, textDecoration: 'none' }}
        >
          Ventures
        </Link>

        <Link
          as={RouterLink}
          to="/case-study"
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight="normal"
          color={textColor}
          _hover={{ color: accentColor, textDecoration: 'none' }}
        >
          Case Study
        </Link>

        <Link
          href="https://sangwanhq.substack.com/"
          isExternal
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight="normal"
          color={textColor}
          _hover={{ color: accentColor, textDecoration: 'none' }}
        >
          Blog
        </Link>

        <Button
          as={RouterLink}
          to="/n-theory"
          size={{ base: 'sm', md: 'md' }}
          px={{ base: 4, md: 6 }}
          py={{ base: 2, md: 3 }}
          borderRadius="md"
          bg={accentColor}
          color="white"
          fontWeight="bold"
          fontSize={{ base: 'sm', md: 'md' }}
          letterSpacing="0.02em"
          boxShadow={`0 0 15px ${glowColor}`}
          _hover={{
            bg: "transparent",
            color: accentColor,
            border: `2px solid ${accentColor}`,
            boxShadow: `0 0 25px ${glowColor}`,
            transform: 'translateY(-1px)',
          }}
          transition="all 0.3s ease-out"
          aria-label="Explore Atom Loop"
        >
          Explore A∞
        </Button>
      </Flex>
    </Flex>
  );
}
