import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';

const NuanceStory = ({ onClose }: { onClose: () => void }) => (
  <Box width="360px" bg="whiteAlpha.100" p={6} borderRadius="lg" color="white" backdropFilter="blur(10px)" position="absolute" right="5%" top="20%" zIndex={1}>
    <VStack align="start" spacing={4}>
      <Heading size="md">Nuance</Heading>
      <Text>Bharat is not a monolith. Its reality shifts every 100 kilometers. Nuance is about embracing this diversity.</Text>
      <Text fontStyle="italic">UPI didn’t just build a fintech rail — it built one that runs on QR codes, feature phones, and trust.</Text>
      <Text fontWeight="bold">Ask Yourself: What frictions do outsiders miss that locals live with daily?</Text>
      <Button onClick={onClose} size="sm" variant="outline">Close</Button>
    </VStack>
  </Box>
);

export default NuanceStory;
