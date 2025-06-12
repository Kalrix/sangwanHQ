import { Box, Heading, Text, VStack, Button, Flex } from '@chakra-ui/react';

interface StepProps {
  onNext?: () => void;
  onBack?: () => void;
}

export const NuanceStory = ({ onNext, onBack }: StepProps) => (
  <Box w="100%" h="100vh" bg="black" color="white" p={10}>
    <VStack align="start" spacing={6}>
      <Heading size="lg">Nuance</Heading>
      <Text>Understanding Bharat requires nuance — what looks inefficient may be deeply adaptive.</Text>
      <Flex gap={4} pt={10}>
        <Button onClick={onBack} variant="outline" colorScheme="whiteAlpha">⬅ Back</Button>
        <Button onClick={onNext} variant="outline" colorScheme="whiteAlpha">Next ➡</Button>
      </Flex>
    </VStack>
  </Box>
);
