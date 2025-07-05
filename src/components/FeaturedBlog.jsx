import {
  Box,
  Image,
  Text,
  Button,
  Link,
  VStack,
  HStack,
  Tag,
  Badge,
  Spacer,
} from '@chakra-ui/react';

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
        borderRadius="lg"
        mb={4}
      />

      {/* Top Meta */}
      <HStack spacing={3} mb={2}>
        <Badge colorScheme="green" fontSize="0.7rem" px={2} py={0.5}>
          Latest
        </Badge>
        <Tag size="sm" colorScheme="gray">
          {blog.tag || 'Reflection'}
        </Tag>
        <Spacer />
        <Text fontSize="sm" color="gray.500">
          {blog.date}
        </Text>
      </HStack>

      {/* Blog Text Content */}
      <VStack align="start" spacing={3}>
        <Text fontSize="2xl" fontWeight="bold" color="black" lineHeight="1.4">
          {blog.title}
        </Text>

        <Text fontSize="md" color="gray.700" noOfLines={4}>
          {blog.summary}
        </Text>

        <Button
          as={Link}
          href={blog.url}
          isExternal
          size="sm"
          variant="outline"
          colorScheme="gray"
          mt={2}
        >
          Read on Substack
        </Button>
      </VStack>
    </Box>
  );
}
