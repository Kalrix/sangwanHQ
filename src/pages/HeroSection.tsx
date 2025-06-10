// src/pages/HeroSection.tsx
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { keyframes as emotionKeyframes } from "@emotion/react";
import { Link as RouterLink } from "react-router-dom";
import BeamsBackground from "../components/BeamsBackground"; // Import the new component

// Brand colors
const vibrantAccent = "#81E7AF"; // Your specified accent color (greenish-teal)
// brandGlow now uses the RGBA of vibrantAccent for perfect consistency
const brandGlow = "rgba(129, 231, 175, 0.6)";

// --- Animations ---

// Fades in and moves slightly up for most content elements
const fadeInUp = emotionKeyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function HeroSection() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center" // Vertically centers content within this full-height flex
      textAlign="center"
      minH="100vh" // Ensures the section covers the full viewport height
      position="relative"
      zIndex="1" // Ensures this Flex content is above its own background layers
      overflow="hidden" // Prevents overflow from elements
    >
      {/* --- BEAMS BACKGROUND LAYER --- */}
      <BeamsBackground />

      {/* --- Main Background Image Layer with Reduced Opacity Overlay --- */}
      {/* This layer will be *above* the beams but *behind* the text content */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgImage="url('/indiabg.png')" // Your background image path
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        zIndex="-1" // Placed between content (z=1) and beams (z=-2)
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          w: "100%", // Fixed: Changed = to :
          h: "100%", // Fixed: Changed = to :
          bg: "rgba(0, 0, 0, 0.3)", // Overlay opacity (you can adjust this further)
        }}
      />

      {/* --- Main Content Container (minimal padding, wide for impact) --- */}
      <Box
        px={{ base: 6, sm: 8, md: 12, lg: 16 }} // Horizontal padding
        py={{ base: 8, md: 12 }} // Reduced vertical padding for compactness
        maxW="1400px" // Maintain wide content for impactful feel
        mx="auto" // Centers content block horizontally
        color="white" // Default text color
      >
        {/* N THEORY - Bold and prominent, the core identifier */}
        <Heading
          as="h2"
          fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '7xl' }} // Large for impact
          fontWeight="extrabold" // Extra bold for strong emphasis
          color="white"
          letterSpacing="0.1em" // Distinct letter spacing
          textTransform="uppercase"
          mb={{ base: 4, md: 6 }} // Adjusted margin-bottom for tighter spacing
          animation={`${fadeInUp} 1s ease-out 0.5s forwards`}
          textShadow={`0 0 15px ${vibrantAccent}, 0 0 30px rgba(129, 231, 175, 0.6)`} // Prominent glow
        >
          'N'-THEORY
        </Heading>

        {/* Visionary Tagline - Concise and powerful */}
        <Heading
          as="h1"
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }} // Slightly smaller than "N THEORY" for hierarchy
          fontWeight="bold"
          mb={{ base: 10, md: 14 }} // Ample space before buttons (no sub-headline now)
          color="white"
          letterSpacing="tight"
          animation={`${fadeInUp} 1s ease-out 0.8s forwards`}
          lineHeight="1.2" // Good readability
        >
          The Nucleus for Bharat's <Text as="span" color={vibrantAccent}>Next Era</Text>
        </Heading>

        {/* Call to Action Buttons */}
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          gap={6} // Space between buttons
          animation={`${fadeInUp} 1s ease-out 1.5s forwards`}
          width={{ base: '80%', sm: 'auto' }}
          maxW="700px" // Max width for the button group
          mx="auto"
        >
          <Button
            as={RouterLink}
            to="/n-theory"
            size={{ base: 'lg', md: 'xl' }}
            px={{ base: 10, md: 12 }}
            py={{ base: 7, md: 8 }}
            borderRadius="md" // Square with minimal border radius
            bg={vibrantAccent}
            color="black"
            fontWeight="bold"
            fontSize={{ base: 'lg', md: 'xl' }}
            letterSpacing="0.08em"
            boxShadow={`0 6px 20px ${brandGlow}`}
            _hover={{
              bg: "transparent",
              color: vibrantAccent,
              border: `2px solid ${vibrantAccent}`,
              boxShadow: `0 8px 35px ${brandGlow}`,
              transform: 'translateY(-3px)',
            }}
            transition="all 0.3s ease-out"
            aria-label="Explore N Theory Thesis"
          >
            Explore N Theory
          </Button>

          <Button
            as={RouterLink}
            to="/apply"
            size={{ base: 'lg', md: 'xl' }}
            px={{ base: 10, md: 12 }}
            py={{ base: 7, md: 8 }}
            borderRadius="md" // Square with minimal border radius
            bg="transparent"
            color="white"
            fontWeight="bold"
            fontSize={{ base: 'lg', md: 'xl' }}
            letterSpacing="0.08em"
            border={`2px solid ${vibrantAccent}`}
            boxShadow={`0 0 12px ${brandGlow}`}
            _hover={{
              bg: vibrantAccent,
              color: "black",
              boxShadow: `0 0 25px ${brandGlow}`,
              transform: 'translateY(-3px)',
            }}
            transition="all 0.3s ease-out"
            aria-label="Apply to SangwanHQ"
          >
            Build with SangwanHQ
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
