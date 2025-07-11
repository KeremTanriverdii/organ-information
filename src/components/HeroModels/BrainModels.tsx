import { Model } from "@/Models/Brain";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";


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
                        <h2>{isSelected}</h2>
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
                        <h2>{isSelected}</h2>
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
                        <h2>{isSelected}</h2>
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
                        <h2>{isSelected}</h2>
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
                        <h2>{isSelected}</h2>
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
                        <h2>{isSelected}</h2>
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
                        <h2>{isSelected}</h2>
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
        <div className="flex justify-between items-center">
            <div>
                {isSelected && (
                    <div>
                        {getInfo(isSelected)}
                    </div>
                )}
            </div>
            <Canvas>

                <ambientLight intensity={1} />
                <OrbitControls
                ></OrbitControls>
                <Model setIsSelected={setIsSelected} info={getInfo} />
            </Canvas>
        </div>
    )
}
