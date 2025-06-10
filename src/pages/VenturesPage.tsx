// src/pages/VenturesPage.tsx
// Added Button and Link imports here
import { Box, Flex, Heading, Text, SimpleGrid, Icon, VStack, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { keyframes as emotionKeyframes } from '@emotion/react';

const vibrantTeal = "#81E7AF";
const fadeIn = emotionKeyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;
const scaleIn = emotionKeyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

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

export default function VenturesPage() {
  return (
    <Flex
      direction="column"
      minH="calc(100vh - var(--chakra-sizes-header-height) - var(--chakra-sizes-footer-height))"
      px={{ base: 6, md: 12, lg: 16 }}
      py={{ base: 8, md: 12 }}
      position="relative"
      zIndex="1"
      align="center"
    >
      <Heading
        as="h1"
        fontSize={{ base: "4xl", md: "6xl" }}
        fontWeight="bold"
        mb={{ base: 8, md: 12 }}
        textAlign="center"
        color="white"
        animation={`${fadeIn} 1s ease-out 0.2s forwards`}
        textShadow={`0 0 20px ${vibrantTeal}`}
      >
        N-Ventures: Shaping <Text as="span" color={vibrantTeal}>Bharat's Future</Text>
      </Heading>

      <Text
        maxW="800px"
        textAlign="center"
        fontSize={{ base: "md", md: "lg" }}
        lineHeight="tall"
        color="gray.400"
        mb={{ base: 12, md: 16 }}
        animation={`${fadeIn} 1s ease-out 0.4s forwards`}
      >
        These ventures embody the N Theory, demonstrating how deep understanding, native solutions, distributed networks, and non-linear impact can unlock unprecedented value across Bharat.
      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 8, md: 10, lg: 12 }}
        width="100%"
        maxWidth="1200px"
      >
        {/* Venture Card 1: N-Energy */}
        <Box
          bg="rgba(15,15,15,0.7)"
          p={{ base: 6, md: 8 }}
          borderRadius="lg"
          border={`1px solid rgba(0, 229, 255, 0.2)`}
          boxShadow="0 0 20px rgba(0, 229, 255, 0.1)"
          backdropFilter="blur(5px)"
          textAlign="left"
          animation={`${scaleIn} 1s ease-out 0.6s forwards`}
          _hover={{ transform: 'translateY(-5px)', boxShadow: `0 5px 30px rgba(0, 229, 255, 0.3)` }}
          transition="all 0.3s ease-out"
        >
          <Box mb={4}><Icon as={DiagonalArrowIcon} boxSize={12} color={vibrantTeal} transform="rotate(45deg)" /></Box>
          <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} color="white" mb={2}>
            N-Energy: Decentralized Micro-Grids
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.400" mb={4}>
            Community-owned micro-grids leveraging local renewable resources, providing reliable and affordable power to underserved rural communities.
          </Text>
          <Link as={RouterLink} to="/ventures/n-energy" color={vibrantTeal} _hover={{ textDecoration: 'underline', color: 'white' }}>
            Learn More <DiagonalArrowIcon ml={1} />
          </Link>
        </Box>

        {/* Venture Card 2: N-AgriTech */}
        <Box
          bg="rgba(15,15,15,0.7)"
          p={{ base: 6, md: 8 }}
          borderRadius="lg"
          border={`1px solid rgba(0, 229, 255, 0.2)`}
          boxShadow="0 0 20px rgba(0, 229, 255, 0.1)"
          backdropFilter="blur(5px)"
          textAlign="left"
          animation={`${scaleIn} 1s ease-out 0.8s forwards`}
          _hover={{ transform: 'translateY(-5px)', boxShadow: `0 5px 30px rgba(0, 229, 255, 0.3)` }}
          transition="all 0.3s ease-out"
        >
          <Box mb={4}><Icon as={DiagonalArrowIcon} boxSize={12} color={vibrantTeal} transform="rotate(45deg)" /></Box>
          <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} color="white" mb={2}>
            N-AgriTech: Farmer Value Connect
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.400" mb={4}>
            A direct-to-consumer platform empowering farmers with fair prices, direct market access, and data-driven insights for sustainable agriculture.
          </Text>
          <Link as={RouterLink} to="/ventures/n-agritech" color={vibrantTeal} _hover={{ textDecoration: 'underline', color: 'white' }}>
            Learn More <DiagonalArrowIcon ml={1} />
          </Link>
        </Box>

        {/* Venture Card 3: N-Health */}
        <Box
          bg="rgba(15,15,15,0.7)"
          p={{ base: 6, md: 8 }}
          borderRadius="lg"
          border={`1px solid rgba(0, 229, 255, 0.2)`}
          boxShadow="0 0 20px rgba(0, 229, 255, 0.1)"
          backdropFilter="blur(5px)"
          textAlign="left"
          animation={`${scaleIn} 1s ease-out 1s forwards`}
          _hover={{ transform: 'translateY(-5px)', boxShadow: `0 5px 30px rgba(0, 229, 255, 0.3)` }}
          transition="all 0.3s ease-out"
        >
          <Box mb={4}><Icon as={DiagonalArrowIcon} boxSize={12} color={vibrantTeal} transform="rotate(45deg)" /></Box>
          <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }} color="white" mb={2}>
            N-Health: Hyper-Local Wellness Hubs
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.400" mb={4}>
            Community-led primary healthcare centers integrating modern diagnostics with traditional practices for accessible wellness across villages.
          </Text>
          <Link as={RouterLink} to="/ventures/n-health" color={vibrantTeal} _hover={{ textDecoration: 'underline', color: 'white' }}>
            Learn More <DiagonalArrowIcon ml={1} />
          </Link>
        </Box>

        {/* Add more venture cards here */}
      </SimpleGrid>

      <Box mt={16} textAlign="center" animation={`${fadeIn} 1s ease-out 1.2s forwards`}>
        <Heading as="h3" size="xl" color="white" mb={4}>
          Have a vision for a new N-Venture?
        </Heading>
        <Text fontSize="lg" color="gray.400" mb={6}>
          If you're a founder inspired by N Theory and ready to build, we want to hear from you.
        </Text>
        <Button // Button is now imported
          as={RouterLink}
          to="/apply"
          size="lg"
          px={10}
          py={6}
          borderRadius="full"
          bg={vibrantTeal}
          color="black"
          fontWeight="bold"
          fontSize={{ base: 'md', md: 'lg' }}
          letterSpacing="0.05em"
          boxShadow={`0 5px 20px rgba(0, 229, 255, 0.4)`}
          _hover={{
            bg: "transparent",
            color: vibrantTeal,
            border: `2px solid ${vibrantTeal}`,
            boxShadow: `0 5px 30px rgba(0, 229, 255, 0.6)`,
            transform: 'translateY(-3px)',
          }}
          transition="all 0.3s ease-out"
        >
          APPLY TO SANGWANHQ
        </Button>
      </Box>
    </Flex>
  );
}
