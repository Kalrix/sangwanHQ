// src/components/NTheorySections/Introduction.tsx

import { Box, Heading, Text, VStack, Button, Flex, SimpleGrid } from '@chakra-ui/react';

export default function Introduction({ onNext }: { onNext?: () => void }) {
  return (
    <Box py={24} px={{ base: 6, md: 20 }} bg="black" color="white" h="100%">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={1} maxW="7xl" mx="auto">
        <VStack spacing={4} align="start">
          <Heading
            as="h1"
            fontSize={{ base: "5xl", md: "5xl" }}
            fontWeight="extrabold"
            color="#81E7AF"
          >
            I didn’t read this in books.
          </Heading>

          <Text fontSize="xl" color="gray.300">
            I’ve built 2 startups. Worked in 3. One of them was a unicorn.
          </Text>

          <Text fontSize="lg" color="gray.300">
            I’ve seen the inside of pitch rooms, down rounds, fund freezes, and scaling chaos. I’ve been at the core when things worked, and when things collapsed.
          </Text>

          <VStack align="start" spacing={6}>
            <Text fontSize="lg" color="gray.300">
              The unicorn I worked at had momentum, money, and media. But even that had to downsize — because it couldn’t scale the way we expected in Bharat. The problems weren’t tech or talent. They were model, mindset, and mismatch with ground reality.
            </Text>

            <Text fontSize="lg" color="gray.300">
              My own startups? One taught me survival. The other, systems. But the biggest lesson — Bharat needs its own damn playbook.
            </Text>

            <Text fontSize="lg" color="gray.300">
              It’s hard to explain real ideas to people trained on global templates. Your pitch sounds crazy. Your GTM sounds risky. Your idea sounds “too desi.” But the truth is — Bharat-scale problems need Bharat-first thinking.
            </Text>

            <Text fontSize="lg" color="gray.300">
              That’s why I created <b>Atom Loop</b>. Not a framework you memorize. A system you build with — from scratch, with full context. Made for founders who don’t just want to raise, but want to resonate.
            </Text>
          </VStack>
        </VStack>

        <Flex direction="column" align="center" justify="center" gap={6}>
  <Heading
    as="h2"
    fontSize={{ base: "3xl", md: "4xl" }}
    fontWeight="extrabold"
    color="#81E7AF"
    textTransform="uppercase"
    letterSpacing="0.08em"
  >
    ATOM <Text as="span" display="inline" fontSize="1.5em">∞</Text>
  </Heading>

  {onNext && (
    <Button
      onClick={onNext}
      size="lg"
      colorScheme="whiteAlpha"
      variant="outline"
      _hover={{ bg: 'whiteAlpha.200' }}
    >
      Explore the Loop →
    </Button>
  )}
</Flex>
      </SimpleGrid>
    </Box>
  );
}
