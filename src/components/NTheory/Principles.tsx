import { Box, Heading, Text, VStack, Flex, Button, SimpleGrid } from '@chakra-ui/react';
import { FaBolt, FaHandshake, FaGlobeAsia } from 'react-icons/fa';
import React, { createElement } from 'react';

const principles = [
  {
    title: 'Chaos is the Default',
    icon: FaBolt,
    highlight: 'Entropy is Bharat’s natural state.',
    description:
      'In Bharat, predictability is a luxury. Unstructured markets, fragmented infrastructure, and unpredictable user behavior mean that only those who can thrive in chaos truly scale. Jugaad isn’t a hack — it’s a survival instinct. N Theory accepts disorder as the default and builds around adaptability, not perfection.',
  },
  {
    title: 'Trust is the Infrastructure',
    icon: FaHandshake,
    highlight: 'When systems fail, trust prevails.',
    description:
      'In Bharat, trust often replaces formal systems. From kirana store credit to word-of-mouth logistics, trust powers transactions where infrastructure doesn’t. N Theory treats trust as the most important currency — a core design element, not just a byproduct. Without it, nothing compounds.',
  },
  {
    title: 'Context is the Moat',
    icon: FaGlobeAsia,
    highlight: 'Copy-paste is the fastest way to fail.',
    description:
      'Startups often replicate Western playbooks and wonder why they fail in Bharat. What works here is born here — deeply local, culturally intuitive, and economically grounded. N Theory demands contextual intelligence, not just market research. The deeper your roots, the stronger your scale.',
  },
];

export default function Principles({ onNext, onBack }: { onNext?: () => void; onBack?: () => void }) {
  return (
    <Flex
      position="absolute"
      right={0}
      top={0}
      h="100%"
      w="60%"
      px={{ base: 4, md: 12 }}
      pt={20}
      pb={6}
      color="white"
      bg="transparent"
      direction="column"
    >
      {/* Scrollable content area */}
      <Box flex="1" overflowY="auto" pr={2}>
        <VStack align="start" spacing={10} maxW="full">
          <Box>
            <Heading fontSize="3xl" mb={2}>
              Building Bharat's Future — Layer by Layer
            </Heading>
            <Heading fontSize="xl" color="gray.400">
              Foundational Principles of N Theory
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={2}>
            {principles.map((p, i) => (
              <Box key={i} p={6} borderRadius="lg" bg="rgba(255,255,255,0.04)" boxShadow="md" border="1px solid #81E7AF">
                <Flex align="center" gap={4} mb={4}>
                  <Box boxSize={10} color="#81E7AF">
                    {createElement(p.icon as React.ElementType, { size: 24 })}
                  </Box>
                  <Heading fontSize="xl" color="#81E7AF">
                    {p.title}
                  </Heading>
                </Flex>
                <Text fontSize="md" color="gray.400" fontWeight="semibold" mb={2}>
                  {p.highlight}
                </Text>
                <Text fontSize="md" color="gray.300">
                  {p.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          <Text pt={6} fontSize="sm" color="gray.500">
            These principles are not philosophies. They are constraints. They define the soil from which truly native solutions can emerge — and from them, the 5Ns of N Theory were born.
          </Text>
        </VStack>
      </Box>

      {/* Footer with navigation buttons */}
      <Flex pt={6} justify="space-between">
        <Box>
          {onBack && (
            <Button onClick={onBack} size="md" colorScheme="whiteAlpha" variant="outline">
              ⬅ Back
            </Button>
          )}
        </Box>
        <Box>
          {onNext && (
            <Button onClick={onNext} size="md" colorScheme="teal" variant="solid" bg="#81E7AF" color="black">
              Next →
            </Button>
          )}
        </Box>
      </Flex>
    </Flex>
  );
}
