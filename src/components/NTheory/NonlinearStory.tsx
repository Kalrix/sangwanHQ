import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';

const NonlinearStory = ({ onClose }: { onClose: () => void }) => (
  <Box width="360px" bg="whiteAlpha.100" p={6} borderRadius="lg" color="white" backdropFilter="blur(10px)" position="absolute" right="5%" top="20%" zIndex={1}>
    <VStack align="start" spacing={4}>
      <Heading size="md">Nonlinear</Heading>
      <Text>Bharat doesn’t have time for incremental change. Nonlinear is about designing leaps, not tweaks.</Text>
      <Text fontStyle="italic">IndiaStack gave us a digital identity, payments, and consent layer — from nothing.</Text>
      <Text fontWeight="bold">Ask Yourself: Where can you leap instead of crawl?</Text>
      <Button onClick={onClose} size="sm" variant="outline">Close</Button>
    </VStack>
  </Box>
);

export default NonlinearStory;
