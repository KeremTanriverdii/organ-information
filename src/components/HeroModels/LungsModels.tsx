import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import '../../App.css'
import { Card, CardAction, CardDescription, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Lungs } from "@/Models/Lungs";
import { useMediaQuery } from "react-responsive";

export default function LungsModels() {
    const [isSelected, setIsSelected] = useState<string | null>(null);
    console.log(isSelected)
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    function getInfo(key: string) {
        switch (key) {
            case 'normaal25_normaal25_0':
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
            case 'normaal6_normaal6_0':
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
            case 'normaal6_normaal6_0_1':
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
            case 'normaal6_normaal6_0_2':
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
            case 'normaal4_normaal4_0':
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
            case 'normaal5_normaal5_0':
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


            case 'linkerlong3_linkerlong3_0':
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
            {/* İsteğe bağlı bilgi kartı */}
            {isSelected && (
                <div className="info-card">
                    {getInfo(isSelected)}
                </div>
            )}

            <Canvas
                camera={{ position: [0, 0, 500], fov: 25 }}
                shadows
                dpr={1}
            >
                <ambientLight intensity={1} />
                <OrbitControls
                    minDistance={300}
                    maxDistance={600}
                    target={[0, 0, 0]}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />

                <group scale={isMobile ? 25 : 55}>
                    <Lungs setIsSelected={setIsSelected} info={getInfo} />
                </group>

                {/* Axis help for developers */}
                {/* <axesHelper args={[100]} /> */}

                <Environment
                    preset="city"
                    background
                    backgroundIntensity={0.3}
                    backgroundBlurriness={0.010}
                />
            </Canvas>
        </div>
    )
}
