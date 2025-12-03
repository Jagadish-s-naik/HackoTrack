import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Stars } from '@react-three/drei';

function FloatingShape() {
    const meshRef = useRef();

    useFrame((state, delta) => {
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef}>
                <torusKnotGeometry args={[1.5, 0.4, 100, 16]} />
                <meshStandardMaterial
                    color="#4ade80"
                    roughness={0.2}
                    metalness={0.8}
                    wireframe
                />
            </mesh>
            <mesh scale={1.1}>
                <torusKnotGeometry args={[1.5, 0.4, 100, 16]} />
                <meshStandardMaterial
                    color="#22c55e"
                    transparent
                    opacity={0.1}
                    side={2} // DoubleSide
                />
            </mesh>
        </Float>
    );
}

function Scene() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <FloatingShape />
        </>
    );
}

export default function Hero3D() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas>
                <Scene />
            </Canvas>
        </div>
    );
}
