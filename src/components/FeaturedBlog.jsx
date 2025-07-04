import { Box, Image, Text, Button, Link, VStack } from '@chakra-ui/react';

export default function FeaturedBlog({ blog }) {
  if (!blog) return null;

  return (
    <Box>
      {/* Blog Image */}
      <Image
        src={blog.image}
        alt={blog.title}
        w="100%"
        maxH="500px"
        objectFit="cover"
        borderRadius="md"
        mb={6}
      />

      {/* Blog Text Content */}
      <VStack align="start" spacing={3}>
        <Text fontSize="2xl" fontWeight="bold" color="black">
          {blog.title}
        </Text>
        <Text fontSize="md" color="gray.600">
          {blog.summary}
        </Text>

        <Button
          as={Link}
          href={blog.url}
          isExternal
          size="sm"
          variant="outline"
          colorScheme="gray"
        >
          Read on Substack
        </Button>
      </VStack>
    </Box>
  );
}
