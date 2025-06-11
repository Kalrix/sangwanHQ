// src/pages/NTheoryPage.tsx

import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Text as DreiText, Stars } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import { Box, Button, Heading, Text, HStack } from '@chakra-ui/react';
import * as THREE from 'three';

import NucleusStory from '../components/NTheory/NucleusStory';
import NuanceStory from '../components/NTheory/NuanceStory';
import NativeStory from '../components/NTheory/NativeStory';
import NexusStory from '../components/NTheory/NexusStory';
import NonlinearStory from '../components/NTheory/NonlinearStory';

const layerData = [
  { name: 'Nucleus', radius: 0.7, color: '#9F3D2E', labelAngle: 0, summary: 'The core insight that drives all direction.' },
  { name: 'Nuance', radius: 1.1, color: '#D7681E', labelAngle: Math.PI / 4, summary: 'Contextual intelligence unique to Bharat.' },
  { name: 'Native', radius: 1.5, color: '#3F7F63', labelAngle: Math.PI / 2, summary: 'Solutions rooted in local reality.' },
  { name: 'Nexus', radius: 1.9, color: '#325B89', labelAngle: (3 * Math.PI) / 4, summary: 'Power of interconnected ecosystems.' },
  { name: 'Nonlinear', radius: 2.3, color: '#563B77', labelAngle: Math.PI, summary: 'Jumps over linear progress via jugad.' },
];

const getCircularPosition = (radius: number, angle: number): [number, number, number] => {
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);
  return [x, y, 0];
};

const RotatingLayer = ({
  radius,
  color,
  opacity = 1,
}: {
  radius: number;
  color: string;
  opacity?: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[radius, 20, 14]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={opacity} />
    </mesh>
  );
};

const NTheoryPage = () => {
  const [step, setStep] = useState(0);
  const currentLayer = layerData[step - 1];

  const globalScaleFactor = 0.85;
  const { scale } = useSpring({
    scale: step === 0 ? globalScaleFactor : globalScaleFactor * 1.08,
    config: { mass: 1, tension: 100, friction: 14 },
  });

  return (
    <Box w="100vw" h="100dvh" bg="black" pb="72px" overflow="hidden" position="relative">
      <Box position="absolute" top={0} left={0} w="100%" h="100%" zIndex={0}>
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[2, 2, 5]} intensity={1.2} />
          <Stars radius={100} depth={50} count={3000} factor={4} fade />
          <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.15} />

          <animated.group scale={scale}>
            {step === 0 &&
              layerData.map((layer, index) => (
                <React.Fragment key={layer.name}>
                  <RotatingLayer
                    radius={layer.radius}
                    color={layer.color}
                    opacity={1 - index * 0.15}
                  />
                  <DreiText
                    position={getCircularPosition(layer.radius + 0.1, (2 * Math.PI * index) / layerData.length)}
                    fontSize={0.2}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    onPointerOver={(e) => {
                      const tooltipDiv = document.getElementById('n-tooltip');
                      if (tooltipDiv) {
                        tooltipDiv.innerText = layer.summary;
                        tooltipDiv.style.display = 'block';
                      }
                    }}
                    onPointerOut={() => {
                      const tooltipDiv = document.getElementById('n-tooltip');
                      if (tooltipDiv) {
                        tooltipDiv.style.display = 'none';
                      }
                    }}
                  >
                    {layer.name}
                  </DreiText>
                </React.Fragment>
              ))}

            {step > 0 && step <= 5 && (
              <>
                <RotatingLayer radius={currentLayer.radius} color={currentLayer.color} />
                <DreiText
                  position={getCircularPosition(currentLayer.radius + 0.1, currentLayer.labelAngle)}
                  fontSize={0.25}
                  color="white"
                  anchorX="center"
                  anchorY="middle"
                >
                  {currentLayer.name}
                </DreiText>
              </>
            )}
          </animated.group>
        </Canvas>
        <Box id="n-tooltip" position="absolute" top="10px" left="50%" transform="translateX(-50%)" bg="gray.800" color="white" px={4} py={2} borderRadius="md" fontSize="sm" display="none" zIndex={10} />
      </Box>

      <Box position="absolute" top="6%" left="6%" zIndex={1}>
        <Heading color="white" fontSize="3xl" letterSpacing="widest">
          India's Future | Nucleus by N Theory
        </Heading>
        <Text fontSize="lg" mt={3} color="gray.400">
          Frameworks for Bharat. Built with roots, for the future.
        </Text>
      </Box>

      <Box
        position="fixed"
        bottom="0"
        width="100vw"
        py={3}
        bg="rgba(0,0,0,0.95)"
        borderTop="1px solid rgba(255,255,255,0.08)"
        zIndex={9999}
      >
        <HStack justify="center" spacing={8}>
          {layerData.map((layer, index) => (
            <Text
              key={layer.name}
              onClick={() => setStep(index + 1)}
              cursor="pointer"
              fontSize="lg"
              fontWeight="semibold"
              color={step === index + 1 ? '#81E7AF' : 'white'}
              _hover={{ color: '#81E7AF' }}
            >
              {layer.name}
            </Text>
          ))}
        </HStack>
      </Box>

      {step > 0 && step <= 5 && (
        <Box position="absolute" top="4%" right="6%" zIndex={2}>
          <Button size="sm" onClick={() => setStep(0)} variant="outline" colorScheme="whiteAlpha">
            ⟵ Back to Overview
          </Button>
        </Box>
      )}

      {step === 1 && <NucleusStory onClose={() => setStep(0)} />}
      {step === 2 && <NuanceStory onClose={() => setStep(0)} />}
      {step === 3 && <NativeStory onClose={() => setStep(0)} />}
      {step === 4 && <NexusStory onClose={() => setStep(0)} />}
      {step === 5 && <NonlinearStory onClose={() => setStep(0)} />}
    </Box>
  );
};

export default NTheoryPage;
