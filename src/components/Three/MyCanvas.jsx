import React from 'react';
import BoxGroup from "./BoxGroup";
import {OrbitControls} from "@react-three/drei";
import { Canvas } from '@react-three/fiber';


const MyCanvas = ({wireframe}) => {
    return (
        <Canvas shadows camera={{ position: [10, 8, 5]}}>
            <color attach="background" args={['#fff8f1']} />
            <ambientLight intensity={0.5} />
            <directionalLight color="white" position={[0, 5, 10]} />
            <BoxGroup wireframe={wireframe} />
            <OrbitControls
                target={[4.5 / 2, 4.5 / 2, 4.5 / 2]}
                autoRotate={true}
                autoRotateSpeed={-0.8}
                minPolarAngle={0}
                maxPolarAngle={Math.PI / 2}
            />
        </Canvas>
    );
};

export default MyCanvas;