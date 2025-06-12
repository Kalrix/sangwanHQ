import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';

interface StepProps {
  onNext?: () => void;
  onBack?: () => void;
}
export const ApplyNTheory = ({ onNext, onBack }: StepProps) => (
  <Box w="100%" h="100vh" bg="black" color="white" p={10}>
    <VStack align="start" spacing={6}>
      <Heading size="lg">Apply N Theory</Heading>
      <Text>Take the principles and 5Ns — now see how they apply to your own challenge or startup.</Text>
      <Flex gap={4} pt={10}>
        <Button onClick={onBack} variant="outline" colorScheme="whiteAlpha">⬅ Back</Button>
        <Button onClick={onNext} variant="outline" colorScheme="whiteAlpha">Next ➡</Button>
      </Flex>
    </VStack>
  </Box>
);
