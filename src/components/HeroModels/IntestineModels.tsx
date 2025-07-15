import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import '../../App.css'
import { Card, CardAction, CardDescription, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Intestine } from "@/Models/Small_and_large_intestine";

export default function IntestineModels() {
    const [isSelected, setIsSelected] = useState<string | null>(null);

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

            <div className={isSelected === null ? `hidden` : `info-card`}>
                {isSelected && (
                    <div>
                        {getInfo(isSelected)}
                    </div>
                )}
            </div>
            <Canvas>
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
                <OrbitControls
                    minDistance={12}
                    maxDistance={13}
                    target={[0, 0, 0]}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                >

                </OrbitControls>

                <group position={[0, 0, 0]}>
                    <Intestine setIsSelected={setIsSelected} info={getInfo} />
                </group>

                <Environment preset="dawn" background resolution={64} backgroundIntensity={0.3} backgroundBlurriness={0.010} />

            </Canvas>

        </div>
    )
}
