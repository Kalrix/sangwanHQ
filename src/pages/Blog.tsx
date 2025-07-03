import {
  Box,
  Heading,
  VStack,
  Text,
  Link,
  HStack,
  Divider,
  Button,
  Stack,
} from '@chakra-ui/react';
import { useState } from 'react';

const allPosts = [
  {
    title: "At What Cost",
    summary:
      "Following your passion feels noble—until you realise what it quietly took from you.",
    url: "https://sangwanhq.substack.com/p/at-what-cost",
    date: "July 3, 2025",
  },
  
  // Add more posts as needed
];

const POSTS_PER_PAGE = 2;

export default function Blog() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = allPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <Box
      bg="white"
      color="gray.800"
      px={{ base: 4, md: 10 }}
      pt="15vh"
      pb={{ base: 12, md: 24 }}
      minHeight="100vh"
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={12}
        align="start"
      >
        {/* LEFT COLUMN */}
        <Box flex="1">
          <Heading fontSize="2xl" mb={8} fontWeight="bold" color="black">
            My Thoughts
          </Heading>

          <VStack spacing={6} align="stretch">
            {paginatedPosts.map((post, index) => (
              <Box key={index}>
                <Link
                  href={post.url}
                  isExternal
                  _hover={{ textDecoration: 'underline', color: 'blue.600' }}
                >
                  <HStack justify="space-between" align="start">
                    <Text fontWeight="semibold" fontSize="md">
                      {post.title}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {post.date}
                    </Text>
                  </HStack>
                  <Text fontSize="sm" color="gray.600" mt={1}>
                    {post.summary}
                  </Text>
                </Link>
                {index < paginatedPosts.length - 1 && (
                  <Divider mt={4} borderColor="gray.200" />
                )}
              </Box>
            ))}
          </VStack>

          {/* Pagination */}
          <HStack spacing={4} mt={10}>
            <Button
              size="sm"
              variant="outline"
              isDisabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              ← Previous
            </Button>
            <Button
              size="sm"
              variant="outline"
              isDisabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next →
            </Button>
          </HStack>
        </Box>

        {/* DIVIDER */}
        <Box
          display={{ base: 'none', md: 'block' }}
          width="1px"
          bg="gray.200"
          opacity={0.3}
          alignSelf="stretch"
        />

        {/* RIGHT COLUMN */}
        <Box flex="0 0 35%" w="100%">
          {/* QR SUBSCRIBE */}
          <Box textAlign="center" mb={10}>
            <Text fontSize="sm" color="gray.500" mb={2}>
              Subscribe to get new posts
            </Text>
            <Link href="https://sangwanhq.substack.com" isExternal>
              <Box
                as="img"
                src="/qr.png"
                alt="Subscribe QR"
                maxW="140px"
                mx="auto"
                borderRadius="md"
                filter="grayscale(100%)"
              />
            </Link>
          </Box>

          {/* Reader Picks */}
          <Box mb={10}>
            <Text fontSize="sm" color="gray.500" mb={2}>
              Reader Picks
            </Text>
            <VStack spacing={2} align="start" pl={2} borderLeft="2px solid #E2E8F0">
              <Link href="https://..." isExternal color="blue.600" fontSize="sm">
                • How I Almost Quit
              </Link>
              <Link href="https://..." isExternal color="blue.600" fontSize="sm">
                • Why Strategy Beats Speed
              </Link>
              <Link href="https://..." isExternal color="blue.600" fontSize="sm">
                • Building After Burnout
              </Link>
            </VStack>
          </Box>

          {/* Quote */}
          <Box
            bg="gray.50"
            borderRadius="md"
            p={4}
            border="1px solid"
            borderColor="gray.200"
          >
            <Text fontSize="sm" color="gray.500" mb={2}>
              Quote I Live By
            </Text>
            <Text fontSize="sm" fontStyle="italic" color="gray.600">
              “There would be no passion in this world if we didn’t fight for what we love.”
            </Text>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
