import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react';

interface StepProps {
  onNext?: () => void;
  onBack?: () => void;
}
export const DownloadResources = ({ onBack }: StepProps) => (
  <Box w="100%" h="100vh" bg="black" color="white" p={10}>
    <VStack align="start" spacing={6}>
      <Heading size="lg">Download Resources</Heading>
      <Text>Access slides, templates, and the full N Theory whitepaper here.</Text>
      <Flex pt={10}>
        <Button onClick={onBack} variant="outline" colorScheme="whiteAlpha">⬅ Back</Button>
      </Flex>
    </VStack>
  </Box>
);
