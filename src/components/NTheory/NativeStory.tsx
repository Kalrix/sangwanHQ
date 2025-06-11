import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';

const NativeStory = ({ onClose }: { onClose: () => void }) => (
  <Box width="360px" bg="whiteAlpha.100" p={6} borderRadius="lg" color="white" backdropFilter="blur(10px)" position="absolute" right="5%" top="20%" zIndex={1}>
    <VStack align="start" spacing={4}>
      <Heading size="md">Native</Heading>
      <Text>Being native is not a posture — it’s a constraint. Bharat needs solutions that emerge from its soil.</Text>
      <Text fontStyle="italic">Aarogya Setu wasn’t just an app — it worked on IVR and supported 11 languages.</Text>
      <Text fontWeight="bold">Ask Yourself: What makes your solution born of Bharat, not borrowed?</Text>
      <Button onClick={onClose} size="sm" variant="outline">Close</Button>
    </VStack>
  </Box>
);

export default NativeStory;
