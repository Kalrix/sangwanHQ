import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";

const mindMapData = {
  center: { label: "Core Need", position: [0, 0, 0] as [number, number, number] },
  branches: [
    { label: "Illusion: Big TAM", position: [2, 1.5, 0] },
    { label: "Surface Insight", position: [-2, 1.2, 0] },
    { label: "Friction: Trust Gap", position: [1.8, -1.4, 0.3] },
    { label: "Existing Competitor", position: [-1.6, -1.3, -0.4] },
    { label: "User Journey Gap", position: [0.3, 2.2, 1.1] }
  ]
};

type NodeProps = {
  position: [number, number, number];
  label: string;
  color?: string;
};

const MindMapNode: React.FC<NodeProps> = ({ position, label, color = "#E0E0E0" }) => (
  <mesh position={position}>
    <sphereGeometry args={[0.08, 32, 32]} />
    <meshStandardMaterial color={color} />
    <Html distanceFactor={8} position={[0, 0.15, 0]}>
      <div style={{
        background: "#1a1a1a",
        padding: "6px 12px",
        borderRadius: "6px",
        border: "1px solid #333",
        color: "#f0f0f0",
        fontSize: "0.8rem",
        fontFamily: "sans-serif"
      }}>{label}</div>
    </Html>
  </mesh>
);

const LinkLine: React.FC<{ start: [number, number, number]; end: [number, number, number] }> = ({ start, end }) => {
  const lineRef = React.useRef<THREE.Line>(null);
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  const geometry = React.useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [start, end]);

  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: "#888" }))} ref={lineRef} />
  );
};

const OrbitRadar3D = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", background: "#0a0a0a" }}>
      <Canvas camera={{ position: [0, 3, 6], fov: 45 }} shadows>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <MindMapNode position={mindMapData.center.position} label={mindMapData.center.label} color="#00FFC2" />

        {mindMapData.branches.map((branch, index) => (
          <React.Fragment key={index}>
            <MindMapNode position={branch.position as [number, number, number]} label={branch.label} />
            <LinkLine start={mindMapData.center.position} end={branch.position as [number, number, number]} />
          </React.Fragment>
        ))}

        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
};

export default OrbitRadar3D;
