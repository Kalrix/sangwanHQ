// src/pages/ApplyPage.tsx
import { Box, Flex, Heading, Text, Link, VStack, Icon } from '@chakra-ui/react';
import { keyframes as emotionKeyframes } from '@emotion/react';

const vibrantTeal = "#81E7AF";
const fadeIn = emotionKeyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
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

export default function ApplyPage() {
  return (
    <Flex
      direction="column"
      minH="calc(100vh - var(--chakra-sizes-header-height) - var(--chakra-sizes-footer-height))"
      px={{ base: 6, md: 12, lg: 16 }}
      py={{ base: 8, md: 12 }}
      position="relative"
      zIndex="1"
      align="center"
      justify="center"
      textAlign="center"
    >
      <VStack
        maxW="800px"
        spacing={6}
        bg="rgba(15,15,15,0.8)"
        p={{ base: 8, md: 12 }}
        borderRadius="lg"
        border={`1px solid rgba(0, 229, 255, 0.2)`}
        boxShadow="0 0 30px rgba(0, 229, 255, 0.15)"
        backdropFilter="blur(8px)"
        animation={`${fadeIn} 1s ease-out 0.2s forwards`}
      >
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight="bold"
          color={vibrantTeal}
          mb={4}
          textShadow={`0 0 15px ${vibrantTeal}`}
        >
          Join SangwanHQ: Build the Future
        </Heading>

        <Text fontSize={{ base: "md", md: "lg" }} lineHeight="tall" color="gray.300">
          Are you a visionary founder, deeply aligned with the N Theory, and ready to tackle Bharat's most profound challenges? SangwanHQ isn't just an incubator; we are a dedicated partner in bringing your N-shaped venture to life.
        </Text>

        <Text fontSize={{ base: "md", md: "lg" }} lineHeight="tall" color="gray.400">
          We are seeking founders with:
        </Text>
        <VStack align="flex-start" spacing={2} px={4} width="100%">
          <Text fontSize="md" color="gray.300">
            • A deep understanding of Bharat's ground realities (N-UANCE).
          </Text>
          <Text fontSize="md" color="gray.300">
            • An innovative idea for a native, frugal solution (N-ATIVE).
          </Text>
          <Text fontSize="md" color="gray.300">
            • The ambition to build distributed, interconnected systems (N-EXUS).
          </Text>
          <Text fontSize="md" color="gray.300">
            • A drive for non-linear, transformative impact (N-ON-LINEAR).
          </Text>
        </VStack>

        <Text fontSize={{ base: "md", md: "lg" }} lineHeight="tall" color="gray.300" mt={6}>
          To apply, please send a comprehensive proposal outlining your venture idea, team (if any), your alignment with N Theory, and your vision for Bharat to:
        </Text>

        <Link
          href="mailto:apply@sangwanhq.com"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          color={vibrantTeal}
          _hover={{ textDecoration: 'underline', color: 'white' }}
          display="flex"
          alignItems="center"
          py={2}
          px={4}
          borderRadius="md"
          border={`1px solid ${vibrantTeal}`}
          transition="all 0.3s ease-out"
        >
          apply@sangwanhq.com <DiagonalArrowIcon ml={2} boxSize={6} />
        </Link>

        <Text fontSize="sm" color="gray.500" mt={4}>
          We review applications on a rolling basis. Due to the volume of submissions, we may not be able to respond to all inquiries.
        </Text>
      </VStack>
    </Flex>
  );
}
