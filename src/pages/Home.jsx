import React, { useState } from 'react';
import MyCanvas from "../components/Three/MyCanvas";

const Home = () => {
    const [wireframe, setWireframe] = useState(false);

    return (
        <div className={'content-container'}>
            <h3 className={'content-text'}>
                Hello dear friend! This is my training site.
                It is dedicated to experiments with 3d graphics on the web. Over time,
                I will try to add as many of my works here as possible.
                In the meantime, enjoy what you have).
            </h3>
            <div className={'inner'}>
                <MyCanvas wireframe={wireframe} />
                <button onClick={() => setWireframe(!wireframe)}
                        className={'btn-inner'}>
                    {!wireframe ? 'Enable wireframe mode' : 'Disable wireframe mode'}
                </button>
            </div>
        </div>
    );
};

export default Home;