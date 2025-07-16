import { Model } from "@/Models/Brain";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import '../../App.css'
import { Card, CardAction, CardDescription, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

export default function BrainModels() {
    const [isSelected, setIsSelected] = useState<string | null>(null);

    function getInfo(key: string) {
        switch (key) {
            // case 'materials2':
            //     return (
            //         <Card>
            //             <CardHeader>{isSelected}</CardHeader>
            //             <CardDescription>is detailed for brain of parts</CardDescription>
            //             <ul>
            //                 <li>lorem1</li>
            //                 <li>Lorem, ipsum.</li>
            //                 <li>Lorem, ipsum dolor.</li>
            //             </ul>
            //             <CardAction>
            //                 <Button onClick={() => setIsSelected(null)}>Back</Button>
            //             </CardAction>
            //         </Card>
            //     )
            case 'materials2_1':
                return (
                    <Card>
                        <CardHeader>Temporal Lobe</CardHeader>
                        <CardDescription>Located beneath the parietal lobe, near the temples and ears, the temporal lobe is closely associated with hearing, memory, and emotion processing.</CardDescription>
                        <ul>
                            <h4>Functions</h4>
                            <li>Auditory Processing:<strong></strong>Receiving and interpreting sounds.</li>
                            <li><strong>Memory:</strong>Organizing new information and forming both short-term and long-term memories. It has a strong connection with visual and auditory memory (e.g., facial recognition, remembering words).</li>
                            <li><strong>Language Comprehension:</strong>Understanding spoken and written language (Wernicke's area is found in this lobe).</li>
                            <li><strong>Emotional Processing:</strong>Controlling and regulating intense emotions like fear and anger (parts of the limbic system are within the temporal lobe).</li>
                            <li><strong>Olfactory Perception:</strong>Contains centers related to the sense of smell.</li>
                        </ul>
                        <CardAction>
                            <Button onClick={() => setIsSelected(null)}>Back</Button>
                        </CardAction>
                    </Card>
                )
            case 'materials2_2':
                return (
                    <Card>
                        <CardHeader>Parietal Lobe</CardHeader>
                        <CardDescription>Situated behind the frontal lobe, this lobe is central to processing sensory information.</CardDescription>
                        <ul>
                            <h4>Functions</h4>
                            <li><strong>Sensory Perception:</strong>Interpreting bodily sensations such as touch, pressure, temperature, and pain.</li>
                            <li><strong>Spatial Awareness:</strong>Understanding the body's position in space and the spatial relationships between objects.</li>
                            <li><strong>Navigation:</strong>Sense of direction and recognizing places in the environment.</li>
                            <li><strong>Integration of Sensory Information:</strong>Combining different sensory inputs to form a complete perception.</li>
                            <li><strong>Language and Mathematics:</strong>Involved in certain linguistic and mathematical functions.</li>
                        </ul>
                        <CardAction>
                            <Button onClick={() => setIsSelected(null)}>Back</Button>
                        </CardAction>
                    </Card>
                )
            // case 'materials2_3':
            //     return (
            //         <Card>
            //             <CardHeader>{isSelected}</CardHeader>
            //             <CardDescription>is detailed for brain of parts</CardDescription>
            //             <ul>
            //                 <li>lorem1</li>
            //                 <li>Lorem, ipsum.</li>
            //                 <li>Lorem, ipsum dolor.</li>
            //             </ul>
            //             <CardAction>
            //                 <Button onClick={() => setIsSelected(null)}>Back</Button>
            //             </CardAction>
            //         </Card>
            //     )
            case 'materials2_4':
                return (
                    <Card>
                        <CardHeader>Brainstem</CardHeader>
                        <CardDescription>Acts as a bridge between the brain and the spinal cord. It's responsible for vital bodily functions.</CardDescription>
                        <ul className="flex flex-col gap-2">
                            <h4>Functions</h4>
                            <li><strong>Autonomic Functions:</strong>
                                Controlling involuntary and vital functions like breathing, heart rate, blood pressure, and body temperature.
                            </li>
                            <li>
                                <strong>Sleep-Wake Cycle:</strong>
                                Regulating states of sleep and wakefulness.
                            </li>
                            <li>
                                <strong>Reflexes:</strong>
                                Managing reflexes such as coughing, sneezing, and swallowing.
                            </li>

                            <li>
                                <strong>Sensory and Motor Information Relay:</strong>
                                Transmitting nerve signals between the brain and spinal cord..
                            </li>
                        </ul>
                        <CardAction>
                            <Button onClick={() => setIsSelected(null)}>Back</Button>
                        </CardAction>
                    </Card>
                )
            case 'materials2_5':
                return (
                    <Card>
                        <CardHeader>Occipital Lobe</CardHeader>
                        <CardDescription>Found at the very back of the brain, this lobe is primarily responsible for visual processing.</CardDescription>
                        <ul>
                            <h4>Functions</h4>
                            <li><strong>Visual Perception:</strong>Receiving, processing, and interpreting raw visual data from the eyes.</li>
                            <li><strong>Image Processing:</strong>Analyzing visual characteristics such as color, form, motion, and depth perception.</li>
                            <li><strong>Visual Memory:</strong>Recognizing and recalling seen objects and faces.</li>
                            <li><strong>Spatial Reasoning:</strong>Using visual information to understand spatial relationships.</li>
                        </ul>
                        <CardAction>
                            <Button onClick={() => setIsSelected(null)}>Back</Button>
                        </CardAction>
                    </Card>
                )
            case 'materials2_6':
                return (
                    <Card>
                        <CardHeader>Frontal Lobe</CardHeader>
                        <CardDescription>Located at the front of the brain, behind the forehead, the frontal lobe is often considered the "command center" of the brain. It's crucial for human personality, decision-making, and complex cognitive processes.</CardDescription>
                        <ul className="flex flex-col gap-2">
                            <h4>Functions</h4>
                            <li><strong>Planning and Organization:</strong> Anticipating future outcomes, setting goals, and developing plans to achieve them.</li>
                            <li><strong>Problem-Solving:</strong> Analyzing issues and devising solutions.</li>
                            <li><strong>Attention and Focus:</strong> Sustaining attention and filtering out distractions.</li>
                            <li><strong>Personality and Emotional Regulation:</strong> Shaping personality traits, emotional expression, and empathy. It plays a significant role in impulse control.</li>
                            <li><strong>Voluntary Movements:</strong> Coordinating conscious muscle movements like walking or reaching. The motor cortex is located here.</li>
                            <li><strong>Language and Memory:</strong>
                                Critical for language comprehension, verbal memory, and speech. It's also involved in the formation and storage of long-term memories.</li>
                        </ul>
                        <CardAction>
                            <Button onClick={() => setIsSelected(null)}>Back</Button>
                        </CardAction>
                    </Card>

                )
            // case 'materials2_7':
            //     return (
            //         <Card>
            //             <CardHeader>{isSelected}</CardHeader>
            //             <CardDescription>is detailed for brain of parts</CardDescription>
            //             <ul>
            //                 <li>lorem1</li>
            //                 <li>Lorem, ipsum.</li>
            //                 <li>Lorem, ipsum dolor.</li>
            //             </ul>
            //             <CardAction>
            //                 <Button onClick={() => setIsSelected(null)}>Back</Button>
            //             </CardAction>
            //         </Card>
            //     )
            // case 'materials2_8':
            //     return (
            //         <Card>
            //             <CardHeader>{isSelected}</CardHeader>
            //             <CardDescription>is detailed for brain of parts</CardDescription>
            //             <ul>
            //                 <li>lorem1</li>
            //                 <li>Lorem, ipsum.</li>
            //                 <li>Lorem, ipsum dolor.</li>
            //             </ul>
            //             <CardAction>
            //                 <Button onClick={() => setIsSelected(null)}>Back</Button>
            //             </CardAction>
            //         </Card>
            //     )
            case 'materials2_9':
                return (
                    <Card>
                        <CardHeader>Cerebellum</CardHeader>
                        <CardDescription>Located at the back of the brain, beneath the occipital and temporal lobes.</CardDescription>
                        <ul>
                            <h4>Functions</h4>
                            <li><strong>Balance and Coordination:</strong>Maintaining body balance and coordinating muscle movements (e.g., walking, running, jumping).</li>
                            <li><strong>Motor Learning:</strong>Acquiring and refining new motor skills (e.g., playing an instrument, sports).</li>
                            <li><strong>Muscle Tone:</strong>Regulating the tension in muscles.</li>
                            <li><strong>Emotion and Cognitive Processes:</strong>Also thought to play a role in emotional regulation and cognitive functions.</li>
                        </ul>
                        <CardAction>
                            <Button onClick={() => setIsSelected(null)}>Back</Button>
                        </CardAction>
                    </Card>
                )
            // case 'materials2_10':
            //     return (
            //         <Card>
            //             <CardHeader>{isSelected}</CardHeader>
            //             <CardDescription>is detailed for brain of parts</CardDescription>
            //             <ul>
            //                 <li>lorem1</li>
            //                 <li>Lorem, ipsum.</li>
            //                 <li>Lorem, ipsum dolor.</li>
            //             </ul>
            //             <CardAction>
            //                 <Button onClick={() => setIsSelected(null)}>Back</Button>
            //             </CardAction>
            //         </Card>
            //     )
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
                    <Model setIsSelected={setIsSelected} info={getInfo} />
                </group>

                <Environment preset="dawn" background resolution={64} backgroundIntensity={0.3} backgroundBlurriness={0.010} />

            </Canvas>

        </div>
    )
}
