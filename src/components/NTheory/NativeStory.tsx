import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';

interface StepProps {
  onNext?: () => void;
  onBack?: () => void;
}

export const NativeStory = ({ onNext, onBack }: StepProps) => (
  <Box w="100%" h="100vh" bg="black" color="white" p={10}>
    <VStack align="start" spacing={6}>
      <Heading size="lg">Native</Heading>
      <Text>True Bharat solutions are rooted in local behavior, not global assumptions.</Text>
      <Flex gap={4} pt={10}>
        <Button onClick={onBack} variant="outline" colorScheme="whiteAlpha">⬅ Back</Button>
        <Button onClick={onNext} variant="outline" colorScheme="whiteAlpha">Next ➡</Button>
      </Flex>
    </VStack>
  </Box>
);
