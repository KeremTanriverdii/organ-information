import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import '../../App.css'
import { Card, CardAction, CardDescription, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Stomach } from "@/Models/Stomach";
import { useMediaQuery } from "react-responsive";

export default function StomachModels() {
    const [isSelected, setIsSelected] = useState<string | null>(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    function getInfo(key: string) {
        switch (key) {
            case 'materials2_10':
                return (
                    <Card>
                        <CardHeader>{isSelected}</CardHeader>
                        <CardDescription>is detailed for brain of parts</CardDescription>
                        <ul>
                            <li>lorem1</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ul>
                        <CardAction>
                            <Button onClick={() => setIsSelected(null)}>Back</Button>
                        </CardAction>
                    </Card>
                )
            default:
                null
        }
    }
    return (
        <div className="relative h-full">

            {/* <div className={isSelected === null ? `hidden` : `info-card`}>
                {isSelected && (
                    <div>
                        {getInfo(isSelected)}
                    </div>
                )}
            </div> */}
            <Canvas camera={{ position: [10, 20, 40], fov: 10 }} shadows dpr={1}>
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
                <OrbitControls
                    target={[0, 0, 0]}
                    minDistance={14}
                    maxDistance={20}
                    maxPolarAngle={Math.PI / 2}
                    minAzimuthAngle={-Math.PI / 2} // left limit (-90°)
                    maxAzimuthAngle={Math.PI / 2}  // right limit (+90°)

                >
                </OrbitControls>

                <group position={isMobile ? [0, 0, 0] : [0, -0.1, 0]} scale={isMobile ? 0.4 : 1}>
                    <Stomach setIsSelected={setIsSelected} info={getInfo} />
                </group>

                <Environment preset="dawn" background />

            </Canvas>

        </div>
    )
}
