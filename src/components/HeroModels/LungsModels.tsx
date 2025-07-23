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
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    function getInfo(key: string) {
        switch (key) {
            case 'normaal25_normaal25_0':
                return (
                    <Card>
                        <CardHeader>Vena cava superior</CardHeader>
                        <CardDescription>The aorta is a cane-shaped artery. It starts in the lower-left chamber of your heart (ventricle). From there, it extends up toward your head a short distance before curving down. The aorta passes through your chest and abdominal cavities and ends at your pelvis.</CardDescription>
                        <p>No valve divides the superior vena cava from the right atrium. As a result, the (right) atrial and (right) ventricular contractions are conducted up into the internal jugular vein and, through the sternocleidomastoid muscle, can be seen as the jugular venous pressure.</p>
                        <CardAction>
                            <Button onClick={() => setIsSelected(null)}>Back</Button>
                        </CardAction>
                    </Card>
                )
            case 'normaal4_normaal4_0':
                return (
                    <Card>
                        <CardHeader>Right Verticle</CardHeader>
                        <CardDescription>The right ventricle forms the majority of the anterior (sternocostal) surface of the heart, where it extends from the right atrioventricular valve almost to the apex of the heart. It's separated from the left ventricle by the interventricular septum.</CardDescription>
                        <ul>
                            <h4>Functions</h4>
                            <p>During right atrial contraction (atrial systole), the right ventricle is relaxed (ventricular diastole), allowing the deoxygenated blood to enter the ventricle without resistance. As the right atrium relaxes and refills (atrial diastole), the right ventricle contracts (ventricular systole), forcing the deoxygenated blood through the pulmonary valve and into the pulmonary trunk for transport to the lungs.</p>
                        </ul>
                        <CardAction>
                            <Button onClick={() => setIsSelected(null)}>Back</Button>
                        </CardAction>
                    </Card>
                )
            case 'normaal5_normaal5_0':
                return (
                    <Card>
                        <CardHeader>Aorta</CardHeader>
                        <CardDescription>The aorta is a cane-shaped artery. It starts in the lower-left chamber of your heart (ventricle). From there, it extends up toward your head a short distance before curving down. The aorta passes through your chest and abdominal cavities and ends at your pelvis.</CardDescription>
                        <ul>
                            <h3>Functions</h3>
                            <li><strong>Inner layer (tunica intima): </strong> This is the tube through which blood passes. It contains smooth muscle tissue, connective tissue and endothelial cells. These special cells enable blood to transport oxygen and nutrients without getting absorbed until it reaches the right spot.</li>
                            <li> <strong>Middle layer (tunica media):</strong> This layer is made of smooth muscle tissue, elastin and collagen (proteins). These substances enable the aorta to meet your body’s changing blood flow needs. When more blood is necessary, the aorta widens. If less blood is needed, it narrows.</li>
                            <li> <strong>Outer layer (tunica adventitia): </strong> The outer layer anchors the aorta in place. It also connects to nearby nerves and tissue.</li>
                        </ul>
                        <CardAction>
                            <Button onClick={() => setIsSelected(null)}>Back</Button>
                        </CardAction>
                    </Card>
                )
            case 'linkerlong3_linkerlong3_0':
                return (
                    <Card>
                        <CardHeader>Right and Left Lobe</CardHeader>
                        <CardDescription>Each lung is divided into sections called lobes by the infoldings of the visceral pleura as fissures. Lobes are divided into segments, and segments have further divisions as lobules. There are three lobes in the right lung and two lobes in the left lung.</CardDescription>
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

                <group position={isMobile ? [0, 80, 0] : [0, 50, 0]} scale={isMobile ? 25 : 55}>
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
