// src/pages/CaseStudy.tsx

import { Box, Text, Heading, VStack } from '@chakra-ui/react';

export default function CaseStudy() {
  return (
    <Box
      bg="white"
      color="gray.800"
      minHeight="100vh"
      px={{ base: 6, md: 12 }}
      pt="25vh"
      textAlign="center"
    >
      <VStack spacing={6}>
        <Heading fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold">
          Case Studies
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="lg">
          Real stories. Real strategy. Real results.
        </Text>
        <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.500">
          I’m currently putting together my most honest case studies — behind the scenes of startups, pivots, failures, and wins.
        </Text>
        <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.400">
          Coming soon. Stay tuned.
        </Text>
      </VStack>
    </Box>
  );
}
