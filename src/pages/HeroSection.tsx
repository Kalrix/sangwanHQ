// src/pages/HeroSection.tsx
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { keyframes as emotionKeyframes } from "@emotion/react";
import { Link as RouterLink } from "react-router-dom";
import BeamsBackground from "../components/BeamsBackground";

const primaryAccent = "#81E7AF";
const brandGlow = "rgba(129, 231, 175, 0.5)";

// Animations
const fadeInUp = emotionKeyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function HeroSection() {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      textAlign="center"
      minH="100vh"
      position="relative"
      zIndex="1"
      overflow="hidden"
    >
      <BeamsBackground />

      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgImage="url('/indiabg.png')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        zIndex="-1"
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          w: "100%",
          h: "100%",
          bg: "rgba(0, 0, 0, 0.4)",
        }}
      />

      <Box
        px={{ base: 6, sm: 8, md: 12, lg: 16 }}
        py={{ base: 8, md: 12 }}
        maxW="1400px"
        mx="auto"
        color="white"
      >
        <Heading
          as="h2"
          fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '7xl' }}
          fontWeight="extrabold"
          color={primaryAccent}
          letterSpacing="0.1em"
          textTransform="uppercase"
          mb={{ base: 4, md: 6 }}
          animation={`${fadeInUp} 1s ease-out 0.5s forwards`}
          textShadow={`0 0 15px ${primaryAccent}, 0 0 30px ${brandGlow}`}
        >
          ATOM <Text as="span" color={primaryAccent} fontSize="1.5em" lineHeight="1" display="inline-block">∞</Text>

        </Heading>

        <Heading
          as="h1"
          fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
          fontWeight="bold"
          mb={{ base: 10, md: 14 }}
          color="white"
          letterSpacing="tight"
          animation={`${fadeInUp} 1s ease-out 0.8s forwards`}
          lineHeight="1.2"
        >
          Build Your Startup from 0 to 1 to ∞<br />Build the Core.{" "}
          <Text as="span" color={primaryAccent}>Loop it to Scale.</Text>
        </Heading>

        <Flex
          direction={{ base: 'column', sm: 'row' }}
          gap={6}
          animation={`${fadeInUp} 1s ease-out 1.5s forwards`}
          width={{ base: '80%', sm: 'auto' }}
          maxW="700px"
          mx="auto"
        >
          <Button
            as={RouterLink}
            to="/n-theory"
            size={{ base: 'lg', md: 'xl' }}
            px={{ base: 10, md: 12 }}
            py={{ base: 7, md: 8 }}
            borderRadius="md"
            bg={primaryAccent}
            color="black"
            fontWeight="bold"
            fontSize={{ base: 'lg', md: 'xl' }}
            letterSpacing="0.08em"
            boxShadow={`0 6px 20px ${brandGlow}`}
            _hover={{
              bg: "transparent",
              color: primaryAccent,
              border: `2px solid ${primaryAccent}`,
              boxShadow: `0 8px 35px ${brandGlow}`,
              transform: 'translateY(-3px)',
            }}
            transition="all 0.3s ease-out"
            aria-label="Explore Atom Loop"
          >
            Explore Atom Loop
          </Button>

          <Button
            as={RouterLink}
            to="/apply"
            size={{ base: 'lg', md: 'xl' }}
            px={{ base: 10, md: 12 }}
            py={{ base: 7, md: 8 }}
            borderRadius="md"
            bg="transparent"
            color="white"
            fontWeight="bold"
            fontSize={{ base: 'lg', md: 'xl' }}
            letterSpacing="0.08em"
            border={`2px solid ${primaryAccent}`}
            boxShadow={`0 0 12px ${brandGlow}`}
            _hover={{
              bg: primaryAccent,
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
