import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';

interface StepProps {
  onNext?: () => void;
  onBack?: () => void;
}
export function NexusStory({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <Box color="white" p={10}>
      <Heading size="lg">Nexus</Heading>
      <Text>Networks compound Bharat’s strengths — distribution, trust, culture.</Text>
      <Flex gap={4} pt={10}>
        <Button onClick={onBack} variant="outline" colorScheme="whiteAlpha">⬅ Back</Button>
        <Button onClick={onNext} variant="outline" colorScheme="whiteAlpha">Next ➡</Button>
      </Flex>
    </Box>
  );
}
