import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';

const Box = (props) => {
    const mesh = useRef(null);

    const [hover, setHover] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [positionY, setPositionY] = useState(0);


    useFrame((state, delta) => {
        let meshPos = mesh.current.position;

        meshPos.y = MathUtils.lerp(
            meshPos.y, clicked ? positionY : meshPos.y, 0.05
        );
    })

    const pointerOverHandler = (e) => {
        e.stopPropagation();
        setHover(true);
    }

    const pointerOutHandler = (e) => {
        e.stopPropagation();
        setHover(false);
    }

    const onClickHandler = (e) => {
        e.stopPropagation();

        let posY = e.eventObject.position.y
        setPositionY(posY + 10);
        setClicked( true);
    }

    return (
        <mesh
            {...props}
            ref={mesh}
            onClick={onClickHandler}
            onPointerOver={pointerOverHandler}
            onPointerOut={pointerOutHandler}
        >
            <meshPhongMaterial
                //Скелетная форма
                wireframe={props.wireframe}
                //дает блики заданного цвета
                specular={'white'}
                color={hover ? 'grey' : 'lightgrey'}
            />
        </mesh>
    )
}

export default Box