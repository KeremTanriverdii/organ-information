import { Model } from "@/Models/Brain";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import '../../App.css'

export default function BrainModels() {
    const [isSelected, setIsSelected] = useState<string | null>(null);

    function getInfo(key: string) {
        switch (key) {
            case 'materials2':
                return (
                    <>
                        <h2>{isSelected}</h2>
                        <ul>
                            <li>lorem1</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ul>
                    </>
                )
            case 'materials2_1':
                return (
                    <>
                        <h2>{isSelected}Temporal Lobe</h2>
                        <ul>
                            <li>lorem1</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ul>
                    </>
                )
            case 'materials2_2':
                return (
                    <>
                        <h2>{isSelected} Pareital lobe</h2>
                        <ul>
                            <li>lorem1</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ul>
                    </>
                )
            case 'materials2_3':
                return (
                    <>
                        <h2>{isSelected}</h2>
                        <ul>
                            <li>lorem1</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ul>
                    </>
                )
            case 'materials2_4':
                return (
                    <>
                        <h2>{isSelected}Pillutary gland</h2>
                        <ul>
                            <li>lorem1</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ul>
                    </>
                )
            case 'materials2_5':
                return (
                    <>
                        <h2>{isSelected} Occopital Lobe</h2>
                        <ul>
                            <li>lorem1</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ul>
                    </>
                )
            case 'materials2_6':
                return (
                    <>
                        <h2>{isSelected} Frontal Lobe</h2>
                        <ul>
                            <li>lorem1</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ul>
                    </>
                )
            case 'materials2_7':
                return (
                    <>
                        <h2>{isSelected}</h2>
                        <ul>
                            <li>lorem1</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ul>
                    </>
                )
            case 'materials2_8':
                return (
                    <>
                        <h2>{isSelected}</h2>
                        <ul>
                            <li>lorem1</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ul>
                    </>
                )
            case 'materials2_9':
                return (
                    <>
                        <h2>{isSelected} Cerebellum</h2>
                        <ul>
                            <li>lorem1</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ul>
                    </>
                )
            case 'materials2_10':
                return (
                    <>
                        <h2>{isSelected} Spinal Cord</h2>
                        <ul>
                            <li>lorem1</li>
                            <li>Lorem, ipsum.</li>
                            <li>Lorem, ipsum dolor.</li>
                        </ul>
                    </>
                )
            default:
                return <p>Bu bölge için hakkında bilgi yok</p>
        }
    }
    return (
        <div className="flex flex-col gap-5 items-center h-screen relative">

            <div className={isSelected === null ? `hidden` : `info-card`}>
                {isSelected && (
                    <div>
                        {getInfo(isSelected)}
                        <button onClick={() => setIsSelected(null)}>Back</button>
                    </div>
                )}
            </div>
            <Canvas className="w-[400px] h-[600px] ">
                <ambientLight intensity={0.3} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
                <OrbitControls />

                <mesh>
                    <Model setIsSelected={setIsSelected} info={getInfo} />
                </mesh>

                {/* <Environment preset="dawn" background resolution={64} backgroundIntensity={0.3} backgroundBlurriness={0.010} /> */}

            </Canvas>

        </div>
    )
}
