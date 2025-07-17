import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import '../../App.css'
import { Card, CardAction, CardContent, CardDescription, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { Stomach } from "@/Models/Stomach";
import { useMediaQuery } from "react-responsive";

export default function StomachModels() {
    const [isSelected, setIsSelected] = useState<string | null>(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    function getInfo(key: string) {
        switch (key) {
            case 'Object_50':
                return (
                    <Card>
                        <CardHeader>Esophagus</CardHeader>
                        <CardDescription>After swallowing, the bolus enters the esophagus, where gravity and muscle contractions help move it down to the stomach through a process called peristalsis.</CardDescription>
                        <ul>
                            <li>Peristalsis is the slow contraction of smooth muscles along and around the digestive system</li>
                            <li>As the bolus moves through the esophagus, these contractions push it toward the stomach.</li>
                        </ul>
                        <CardAction>
                            <Button onClick={() => setIsSelected(null)}>Back</Button>
                        </CardAction>
                    </Card>
                )
            case 'Object_51':
                return (
                    <Card>
                        <CardHeader>Muscularis</CardHeader>
                        <CardDescription>The muscularis layer consists of smooth muscle. Muscle contractions help mix and churn the food.</CardDescription>
                        <CardAction>
                            <Button onClick={() => setIsSelected(null)}>Back</Button>
                        </CardAction>
                    </Card>
                )
            case 'Object_53':
                return (
                    <Card>
                        <CardHeader>Body</CardHeader>
                        <CardContent>
                            <CardDescription className="mb-5">
                                The body (or corpus) is the largest and main central portion of the stomach. It extends from just below the fundus (the dome-shaped top part) down to the pyloric antrum (the lower, narrower part that leads to the small intestine).
                            </CardDescription>
                            <ul>
                                <li><strong>Location:</strong> It occupies a significant part of the left upper abdomen.</li>
                                <li><strong>Muscularity:</strong> It's the broad, expansive central part of the stomach's "J" or "comma" shape.</li>
                                <li><strong>Shape:</strong> Like the rest of the stomach, its walls are highly muscular, featuring three layers of smooth muscle (longitudinal, circular, and the unique inner oblique layer). This multi-layered musculature is critical for its churning function.</li>
                            </ul>
                            <CardAction>
                                <Button onClick={() => setIsSelected(null)}>Back</Button>
                            </CardAction>
                        </CardContent>

                    </Card>
                )
            case 'Object_58':
                return (
                    <Card>
                        <CardHeader>Fundus</CardHeader>
                        <CardDescription>After swallowing, the bolus enters the esophagus, where gravity and muscle contractions help move it down to the stomach through a process called peristalsis.</CardDescription>
                        <ul>
                            <li>Peristalsis is the slow contraction of smooth muscles along and around the digestive system</li>
                            <li>As the bolus moves through the esophagus, these contractions push it toward the stomach.</li>
                        </ul>
                        <CardAction>
                            <Button onClick={() => setIsSelected(null)}>Back</Button>
                        </CardAction>
                    </Card>
                )
            case 'Object_60':
                return (
                    <Card>
                        <CardHeader>Greater curvature</CardHeader>
                        <CardDescription>The greater curvature of stomach (curvatura ventriculi major) starts from the cardiac orifice at the cardiac notch, it forms an arch backward, upward, and to the left; the highest point of the convexity is on a level with the sixth left costal cartilage. From this level it may be followed downward and forward, with a slight convexity to the left as low as the cartilage of the ninth rib; it then turns to the right, to the end of the pylorus.</CardDescription>
                        <CardAction>
                            <Button onClick={() => setIsSelected(null)}>Back</Button>
                        </CardAction>
                    </Card>
                )
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
            <Canvas camera={{ position: [10, 5, 20], fov: 10 }} shadows dpr={1}>
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
                {/* <axesHelper /> */}

                <group position={isMobile ? [0, 0, 0] : [0, -0.1, 0]} scale={isMobile ? 0.4 : 1}>
                    <Stomach setIsSelected={setIsSelected} info={getInfo} />
                </group>

                <Environment preset="dawn" background />

            </Canvas>

        </div>
    )
}
