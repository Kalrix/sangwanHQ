import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';

const NucleusStory = ({ onClose }: { onClose: () => void }) => {
  return (
    <Box
      width="360px"
      bg="whiteAlpha.100"
      p={6}
      borderRadius="lg"
      color="white"
      backdropFilter="blur(10px)"
      position="absolute"
      right="5%"
      top="20%"
      zIndex={1}
    >
      <VStack align="start" spacing={4}>
        <Heading size="md">Nucleus</Heading>
        <Text>
          Every problem we see — unemployment, poor logistics, broken governance — is just a symptom. The nucleus is the root.
        </Text>
        <Text fontStyle="italic">
          Amul didn’t start by branding butter. It started by destroying the milk mafia.
        </Text>
        <Text fontWeight="bold">
          Ask Yourself: What is the crux problem that sustains all others in your ecosystem?
        </Text>
        <Button onClick={onClose} size="sm" variant="outline">
          Close
        </Button>
      </VStack>
    </Box>
  );
};

export default NucleusStory;
