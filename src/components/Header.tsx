// src/components/Header.tsx
import { Box, Flex, Heading, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const vibrantAccent = "#81E7AF"; // Your defined vibrant accent color

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
      borderBottom="1px solid rgba(129, 231, 175, 0.1)"
      boxShadow="0 2px 15px rgba(0,0,0,0.4)"
      height="var(--chakra-sizes-headerHeight)"
    >
      <Heading
        as={RouterLink}
        to="/"
        fontWeight="light"
        fontSize={{ base: 'xl', md: '2xl' }}
        userSelect="none"
        // Changed color to a dark gray/silver-dark, removed textShadow for simplicity
        color="hsl(0, 0%, 50%)" // Dark gray color (HSL: hue 0, saturation 0%, lightness 50%)
        letterSpacing="0.05em"
        _hover={{ textDecoration: 'none', opacity: 0.8 }}
      >
        SangwanHQ
      </Heading>

      <Flex as="nav" align="center" gap={{ base: 4, md: 8 }}>
        <Link
          as={RouterLink}
          to="/n-theory"
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight="normal"
          color="white"
          _hover={{ color: vibrantAccent, textDecoration: 'none' }}
          transition="color 0.2s ease-out"
        >
          N Theory
        </Link>
        <Link
          as={RouterLink}
          to="/ventures"
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight="normal"
          color="white"
          _hover={{ color: vibrantAccent, textDecoration: 'none' }}
          transition="color 0.2s ease-out"
        >
          Ventures
        </Link>
        <Link
          as={RouterLink}
          to="/case-study"
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight="normal"
          color="white"
          _hover={{ color: vibrantAccent, textDecoration: 'none' }}
          transition="color 0.2s ease-out"
        >
          Case Study
        </Link>

        {/* Replaced APPLY with LOGIN */}
        <Button
          as={RouterLink}
          to="/login"
          size={{ base: 'sm', md: 'md' }}
          px={{ base: 4, md: 6 }}
          py={{ base: 2, md: 3 }}
          borderRadius="md"
          bg={vibrantAccent}
          color="black"
          fontWeight="bold"
          fontSize={{ base: 'sm', md: 'md' }}
          letterSpacing="0.02em"
          boxShadow={`0 0 15px rgba(129, 231, 175, 0.4)`}
          _hover={{
            bg: "transparent",
            color: vibrantAccent,
            border: `2px solid ${vibrantAccent}`,
            boxShadow: `0 0 25px rgba(129, 231, 175, 0.6)`,
            transform: 'translateY(-1px)',
          }}
          transition="all 0.3s ease-out"
          aria-label="Login to SangwanHQ"
        >
          LOGIN
        </Button>
      </Flex>
    </Flex>
  );
}
