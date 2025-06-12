// src/pages/NTheoryPage.tsx

import React, { useState, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text as DreiText } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import {
  Box,
  Button,
  Flex,
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper
} from '@chakra-ui/react';
import * as THREE from 'three';

// Layer Definitions
const steps = [
  { name: 'ATOM ∞' },
  { name: 'Principles' },
  { name: 'Problem' },
  { name: 'Apply' },
  { name: 'Resources' }
];

const layerData = [
  { name: 'Nucleus', color: '#FFFFFF' },
  { name: 'Problem', color: '#9F3D2E' },
  { name: 'People', color: '#FFD56F' },
  { name: 'Market', color: '#81E7AF' },
  { name: 'Launch', color: '#7DB7FF' },
  { name: 'Network', color: '#BC91F7' },
  { name: 'Scale', color: '#F94F6D' },
  { name: 'Churn', color: '#FFAA00' },
  { name: 'Flywheel', color: '#00F0FF' }
];

// Spiral Positioning
const getHelixPosition = (index: number, spacing = 0.6): [number, number, number] => {
  const angle = index * 0.8;
  const x = Math.cos(angle) * (index * 0.3 + 0.5);
  const y = Math.sin(angle) * (index * 0.3 + 0.5);
  const z = index * spacing;
  return [x, y, z];
};

// Dot on the path
const GlowDot = ({ position, color }: { position: [number, number, number]; color: string }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.06, 16, 16]} />
      <meshStandardMaterial emissive={color} emissiveIntensity={1.8} color={color} />
    </mesh>
  );
};

// Curved spiral path
const SpiralLine = ({ positions }: { positions: [number, number, number][] }) => {
  const curve = useMemo(() => {
    const points = positions.map(([x, y, z]) => new THREE.Vector3(x, y, z));
    return new THREE.CatmullRomCurve3(points, false, 'centripetal');
  }, [positions]);

  const curvePoints = useMemo(() => curve.getPoints(300), [curve]);
  const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(curvePoints), [curvePoints]);

  return (
    <line>
      <primitive object={geometry} attach="geometry" />
      <lineBasicMaterial attach="material" color="white" linewidth={3} />
    </line>
  );
};

// Glowing ball moving along path
const AnimatedGlow = ({ path }: { path: THREE.Curve<THREE.Vector3> }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() % 10) / 10;
    const pos = path.getPointAt(t);
    if (meshRef.current) {
      meshRef.current.position.set(pos.x, pos.y, pos.z);
    }
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.04, 12, 12]} />
      <meshStandardMaterial emissive="#00F0FF" emissiveIntensity={2} color="#00F0FF" />
    </mesh>
  );
};

// Main Component
const NTheoryPage = () => {
  const [step, setStep] = useState(0);
  const globalScaleFactor = 0.85;

  const { scale } = useSpring({
    scale: step === 1 ? globalScaleFactor * 1.08 : globalScaleFactor,
    config: { mass: 1, tension: 100, friction: 14 }
  });

  const positions = useMemo(() => layerData.map((_, i) => getHelixPosition(i)), []);
  const curve = useMemo(() => new THREE.CatmullRomCurve3(positions.map(p => new THREE.Vector3(...p))), [positions]);

  return (
    <Box w="100vw" h="100dvh" bg="black" pb="72px" overflow="hidden" position="relative">
      {step === 1 && (
        <Box position="absolute" top={0} left={0} w="100%" h="100%" zIndex={0}>
          <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Stars radius={200} depth={40} count={4000} factor={4} fade />
            <OrbitControls enableZoom autoRotate autoRotateSpeed={0.1} />
            <animated.group scale={scale}>
              {layerData.map((layer, i) => (
                <React.Fragment key={layer.name}>
                  <GlowDot position={positions[i]} color={layer.color} />
                  <DreiText
                    position={[positions[i][0], positions[i][1] + 0.15, positions[i][2]]}
                    fontSize={0.25}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                  >
                    {layer.name}
                  </DreiText>
                </React.Fragment>
              ))}
              <SpiralLine positions={positions} />
              <AnimatedGlow path={curve} />
            </animated.group>
          </Canvas>
        </Box>
      )}

      {/* Chakra Step Content (optional) */}
      {/* Replace these with your real components */}
      {step === 0 && <Box color="white" p={8}>Intro Placeholder</Box>}
      {step === 1 && <Box />}
      {step === 2 && <Box color="white" p={8}>Problem Layer Placeholder</Box>}
      {step === 3 && <Box color="white" p={8}>Apply Placeholder</Box>}
      {step === 4 && <Box color="white" p={8}>Resources Placeholder</Box>}

      {/* Stepper */}
      <Box
        position="fixed"
        bottom="0"
        width="100vw"
        py={3}
        px={6}
        bg="rgba(0,0,0,0.95)"
        borderTop="1px solid rgba(255,255,255,0.08)"
        zIndex={9999}
      >
        <Flex justify="space-between" align="center">
          {step > 0 && (
            <Button onClick={() => setStep(step - 1)} size="sm" variant="outline" colorScheme="whiteAlpha">
              ← Back
            </Button>
          )}

          <Stepper size="sm" index={step} colorScheme="teal" flex="1" mx={4} gap={0}>
            {steps.map((s, index) => (
              <Step key={index} onClick={() => setStep(index)} cursor="pointer">
                <StepIndicator>
                  <StepStatus
                    complete={<Box w={2} h={2} bg="white" borderRadius="full" />}
                    active={<Box w={3} h={3} bg="#81E7AF" borderRadius="full" />}
                    incomplete={<Box w={2} h={2} bg="gray.600" borderRadius="full" />}
                  />
                </StepIndicator>
                <Box ml={2}>
                  <StepTitle color="white" fontSize="sm">{s.name}</StepTitle>
                </Box>
                <StepSeparator />
              </Step>
            ))}
          </Stepper>

          {step < steps.length - 1 && (
            <Button onClick={() => setStep(step + 1)} size="sm" bg="#81E7AF" color="black">
              Next →
            </Button>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default NTheoryPage;
