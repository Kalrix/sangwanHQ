import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';

const NexusStory = ({ onClose }: { onClose: () => void }) => (
  <Box width="360px" bg="whiteAlpha.100" p={6} borderRadius="lg" color="white" backdropFilter="blur(10px)" position="absolute" right="5%" top="20%" zIndex={1}>
    <VStack align="start" spacing={4}>
      <Heading size="md">Nexus</Heading>
      <Text>Most revolutions fail when they centralize power. Nexus is about building networks that scale with trust.</Text>
      <Text fontStyle="italic">ONDC empowers kirana stores to be digitally competitive, not digitally replaced.</Text>
      <Text fontWeight="bold">Ask Yourself: How does your system enable trust and networks to scale?</Text>
      <Button onClick={onClose} size="sm" variant="outline">Close</Button>
    </VStack>
  </Box>
);

export default NexusStory;
