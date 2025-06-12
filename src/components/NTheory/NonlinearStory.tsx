import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';

interface StepProps {
  onNext?: () => void;
  onBack?: () => void;
}

export const NonlinearStory = ({ onNext, onBack }: StepProps) => (
  <Box w="100%" h="100vh" bg="black" color="white" p={10}>
    <VStack align="start" spacing={6}>
      <Heading size="lg">Nonlinear</Heading>
      <Text>Jugaad and frugal innovation create leapfrog moments. Progress isn't always linear.</Text>
      <Flex gap={4} pt={10}>
        <Button onClick={onBack} variant="outline" colorScheme="whiteAlpha">⬅ Back</Button>
        <Button onClick={onNext} variant="outline" colorScheme="whiteAlpha">Next ➡</Button>
      </Flex>
    </VStack>
  </Box>
);
