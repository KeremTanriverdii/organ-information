import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import '../../App.css'
import { Card, CardAction, CardDescription, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Intestine } from "@/Models/Small_and_large_intestine";
import { useMediaQuery } from "react-responsive";

export default function IntestineModels() {
    const [isSelected, setIsSelected] = useState<string | null>(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    function getInfo(key: string) {
        switch (key) {
            case 'Tjocktarm_Default_Material_0':
                return (
                    <Card>
                        <CardHeader>Descending Colon</CardHeader>
                        <CardDescription>After the left colic flexure, the colon moves inferiorly towards the pelvis – and is called the descending colon. It is retroperitoneal in the majority of individuals, but is located anteriorly to the left kidney, passing over its lateral border.</CardDescription>
                        <div>
                            <p>When the colon begins to turn medially, it becomes the <strong>sigmoid colon.</strong></p>
                        </div>
                        <CardAction>
                            <Button onClick={() => setIsSelected(null)}>Back</Button>
                        </CardAction>
                    </Card>
                )
            case 'Tjocktarm_Default_Material_0_1':
                return (
                    <Card>
                        <CardHeader>Ascending colon</CardHeader>
                        <CardDescription>The colon begins as the ascending colon, a retroperitoneal structure which ascends superiorly from the cecum.</CardDescription>
                        <div>
                            <p>
                                When it meets the right lobe of the liver, it turns 90 degrees to move horizontally. This turn is known as the right colic flexure (or hepatic flexure), and marks the start of the transverse colon
                            </p>
                        </div>
                        <CardAction>
                            <Button onClick={() => setIsSelected(null)}>Back</Button>
                        </CardAction>

                    </Card>
                )
            case 'Tunntarm_Default_Material_0':
                return (
                    <Card>
                        <CardHeader>The Small Intestine</CardHeader>
                        <CardDescription>The small intestine is an organ located within the gastrointestinal tract. It is approximately 6.5m in the average person and assists in the digestion and absorption of ingested food.</CardDescription>
                        <div>
                            <p>It extends from the pylorus of the stomach to the <strong>ileocaecal junction</strong>, where it meets the large intestine at the ileocaecal valve. Anatomically, the small bowel can be divided into three parts: the duodenum, jejunum, and ileum.</p>
                        </div>
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
            <Canvas camera={{ position: [0, 0, 0], fov: 20 }} shadows dpr={1}>
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
                <OrbitControls
                    minDistance={20}
                    maxDistance={25}
                    target={[0, 0, 0]}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                >
                </OrbitControls>

                <group position={[0, 0, 0]} scale={isMobile ? 1.2 : 2} >
                    <Intestine setIsSelected={setIsSelected} info={getInfo} />
                </group>

                <Environment preset="dawn" background resolution={64} backgroundIntensity={0.3} backgroundBlurriness={0.010} />

            </Canvas>

        </div>
    )
}
