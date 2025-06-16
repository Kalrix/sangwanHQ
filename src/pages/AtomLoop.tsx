import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';
import Hyperspeed from '../components/NTheory/Hyperspeed';

const accentColor = "#5894FF";  // new brand color
const textColor = "#D6E6F2";    // clean white-blue
const subTextColor = "#9BAEC1"; // muted detail text

export default function AtomLoop() {
  return (
    <Box minH="100vh" position="relative" overflow="hidden" bg="black">
      {/* Hyperspeed animation */}
      <Box position="absolute" inset={0} zIndex={0}>
        <Hyperspeed />
      </Box>

      {/* Dark overlay for readability */}
      <Box position="absolute" inset={0} bg="rgba(0, 0, 0, 0.85)" zIndex={1} />

      {/* Foreground Content */}
      <Box
        position="relative"
        zIndex={2}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        px={6}
        py={16}
        minH="100vh"
        color="white"
      >
        <VStack spacing={10} maxW="7xl">
          <Heading
            fontSize={['3xl', '5xl', '6xl']}
            fontWeight="extrabold"
            lineHeight="1.2"
            color={accentColor}
            textShadow={`0 0 25px ${accentColor}`}
          >
            ATOM ∞ = Market × Problem × Resonance
          </Heading>

          <Text fontSize={['lg', 'xl', '2xl']} fontWeight="medium" color={textColor}>
            Amul didn’t win by just selling butter. They decoded the <b>market</b>,
            solved a real <b>problem</b>, and sparked a <b>resonance</b> that changed India.
          </Text>

          <Text fontSize={['md', 'lg']} color={subTextColor} maxW="3xl">
            Atom Loop isn’t theory — it’s the founder’s blueprint to build from
            fundamental truth → toward unstoppable momentum.
          </Text>

          <Button
            size="lg"
            px={10}
            py={6}
            borderRadius="full"
            fontWeight="bold"
            fontSize="lg"
            bg={accentColor}
            color="white"
            boxShadow={`0 0 20px ${accentColor}`}
            _hover={{
              bg: "transparent",
              border: `2px solid ${accentColor}`,
              color: accentColor,
              transform: "translateY(-2px)",
              boxShadow: `0 0 35px ${accentColor}`,
            }}
            transition="all 0.3s ease-out"
          >
            Begin the Loop →
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
