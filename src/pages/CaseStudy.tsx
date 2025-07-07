import {
  Box,
  Text,
  Heading,
  VStack,
  SimpleGrid,
  Link,
  Flex,
  Image,
  Button,
  Tag,
  HStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const caseStudies = [
  {
    id: 'zepto',
    name: 'Zepto',
    description: '10-minute grocery. Dark stores. The scale war.',
    logo: '/logos/zepto.png',
    url: 'https://www.sangwanhq.in/blogs/zepto-isnt-a-grocery-app.html',
    tag: 'Latest',
  },
  // more coming soon...
];

export default function CaseStudyDirectory() {
  return (
    <Box
      px={{ base: 6, md: 12 }}
      pt="20vh"
      pb="10vh"
      bg="white"
      color="black"
      minHeight="100vh"
    >
      {/* Header */}
      <Box mb={12}>
        <Heading
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight="bold"
          letterSpacing="-0.5px"
          mb={1}
          color="black"
        >
          ReWind
        </Heading>
        <Text
          fontSize={{ base: 'sm', md: 'md' }}
          color="gray.600"
          fontWeight="500"
        >
          Startup case studies, one story at a time.
        </Text>
      </Box>

      {/* Grid Layout */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {caseStudies.map((study) => (
          <Box
            key={study.id}
            as="a"
            href={study.url}
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ bg: 'gray.50', textDecoration: 'none', boxShadow: 'sm' }}
            p={5}
            borderRadius="12px"
            transition="0.2s ease"
            border="1px solid #eee"
            bg="white"
          >
            <Flex direction="column" gap={3}>
              <HStack justify="space-between">
                <Image
                  src={study.logo}
                  alt={study.name}
                  boxSize="48px"
                  borderRadius="8px"
                  objectFit="contain"
                />
                <Tag size="sm" colorScheme="blackAlpha" fontWeight="500">
                  {study.tag}
                </Tag>
              </HStack>
              <Box>
                <Text fontSize="lg" fontWeight="600" mb={1}>
                  {study.name}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  {study.description}
                </Text>
              </Box>
              <Button
                size="sm"
                variant="ghost"
                colorScheme="gray"
                alignSelf="flex-start"
                mt={1}
                fontWeight="400"
                fontSize="sm"
              >
                Read now →
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
