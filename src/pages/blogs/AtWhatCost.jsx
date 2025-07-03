import { useEffect } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

export default function AtWhatCost() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://sangwanhq.substack.com/p/at-what-cost";
    }, 2000); // wait 2 seconds before redirecting

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>At What Cost – SangwanHQ</title>
        <meta name="description" content="Following your passion feels noble—until you realise what it quietly took from you." />

        {/* Open Graph tags */}
        <meta property="og:title" content="At What Cost – SangwanHQ" />
        <meta property="og:description" content="Following your passion feels noble—until you realise what it quietly took from you." />
        <meta property="og:image" content="https://www.sangwanhq.in/blog-thumbnails/at-what-cost.jpg" />
        <meta property="og:url" content="https://www.sangwanhq.in/blogs/at-what-cost" />
        <meta property="og:type" content="article" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="At What Cost – SangwanHQ" />
        <meta name="twitter:description" content="Following your passion feels noble—until you realise what it quietly took from you." />
        <meta name="twitter:image" content="https://www.sangwanhq.in/blog-thumbnails/at-what-cost.jpg" />
      </Helmet>

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
          src="/blog-thumbnails/at-what-cost.jpg"
          alt="At What Cost"
          maxW="300px"
          mb={4}
          borderRadius="md"
        />
        <Text fontSize="md" color="gray.600">
          Redirecting to the full blog...
        </Text>
      </Box>
    </>
  );
}
