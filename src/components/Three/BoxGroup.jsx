import React, { useMemo } from 'react';
import Box from './Box';
import {matrix} from "../../data/data";
import {BoxGeometry} from "three";

const BoxGroup = ({wireframe}) => {
    const geometry = useMemo(() => new BoxGeometry(1,1,1), []);

    const boxGroupFigure = matrix.map(

        (segment, indexY) => segment.map((row, indexX) => (
            row.map((item, indexZ) => (
                <Box geometry={geometry}
                     wireframe={wireframe}
                     position={[indexX * 1.5, indexY * 1.5, indexZ * 1.5]}
                     key={indexZ}
                />
            ))
        ))
    )

    return (
        <group>
            {boxGroupFigure}
        </group>
    );
};

export default BoxGroup;