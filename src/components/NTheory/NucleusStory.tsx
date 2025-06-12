// src/components/NTheory/NucleusStory.tsx

import { Box, Heading, Text, VStack, Button, Flex } from '@chakra-ui/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const RotatingLayer = ({ radius = 0.7, color = '#9F3D2E' }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[radius, 20, 14]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.9} />
    </mesh>
  );
};

const NucleusStory = ({
  onBack,
  onNext,
}: {
  onBack?: () => void;
  onNext?: () => void;
}) => {
  return (
    <Box display="flex" w="100%" h="100%">
      {/* Left 3D Layer */}
      <Box w="30%" h="100vh">
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[2, 2, 5]} intensity={1.2} />
          <Stars radius={50} depth={20} count={1000} factor={3} fade />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
          <RotatingLayer />
        </Canvas>
      </Box>

      {/* Right Content */}
      <Box
        w="70%"
        p={10}
        color="white"
        overflowY="auto"
        h="100vh"
        bg="black"
        borderLeft="1px solid rgba(255,255,255,0.1)"
      >
        <VStack align="start" spacing={6} maxW="3xl">
          <Heading size="xl" mb={2}>
            Step 1: Find the Nucleus
          </Heading>

          <Text fontSize="lg" color="gray.300">
            Every visible problem — poor logistics, joblessness, broken systems — is a symptom.
            The **nucleus** is the invisible root that sustains them all.
          </Text>

          <Text fontSize="md" color="gray.400" pt={2}>
            You don’t fix Bharat by patching symptoms. You solve the root. Amul didn’t build a
            dairy brand. It **killed the milk mafia**. UPI didn’t start by creating a wallet — it
            unified banks.
          </Text>

          <Text fontWeight="semibold" color="gray.200" pt={4}>
            Ask yourself: What is the unshakable truth that keeps the problem in place?
          </Text>

          <Text fontSize="sm" color="gray.500">
            Your job is not to find a shiny product idea. It’s to locate the black hole that bends
            the whole system around it. Fix that — and everything else changes.
          </Text>

          {/* Navigation */}
          <Flex pt={8} justify="space-between" w="full">
            {onBack && (
              <Button onClick={onBack} variant="outline" colorScheme="whiteAlpha">
                ⬅ Back
              </Button>
            )}
            {onNext && (
              <Button onClick={onNext} bg="#81E7AF" color="black">
                Next →
              </Button>
            )}
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
};

export default NucleusStory;
