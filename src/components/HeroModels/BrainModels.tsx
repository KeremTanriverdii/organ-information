import { Model } from "@/Models/Brain";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function BrainModels() {
    return (
        <Canvas >
            <ambientLight intensity={1} />
            <OrbitControls>

            </OrbitControls>
            <Model />
        </Canvas>
    )
}
