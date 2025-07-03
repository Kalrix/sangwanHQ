import { useEffect } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

export default function AtWhatCost() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://sangwanhq.substack.com/p/at-what-cost";
    }, 2000); // wait 2 seconds before redirecting

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bg="white"
      px={4}
      textAlign="center"
    >
      <Image
        src="/blog-thumbnails/at-what-cost.jpg" // make sure this image exists in public folder
        alt="At What Cost"
        maxW="300px"
        mb={4}
        borderRadius="md"
      />
      <Text fontSize="md" color="gray.600">
        Redirecting to the full blog...
      </Text>
    </Box>
  );
}
