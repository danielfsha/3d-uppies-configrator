'use client'

import { useColorStore } from '@/atoms';
import { hsvaToHex } from '@uiw/color-convert';
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

export default function Experience() {
  const hsva = useColorStore((state) => state.hsva);
  const hexColor = hsvaToHex(hsva);

  return (
    <Canvas 
      className="w-screen h-screen"
      camera={{
        position: [3,3,3], 
        fov: 20
      }}  
    >
      <color attach="background" args={[hexColor]}/>
      <OrbitControls />
      <mesh>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  )
}