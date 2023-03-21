import React from 'react';
import ThreeLogo from  '../assets/threejs-1.svg';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <Link to={'/'} className={'logo'}>
                <img className={'logo-img'} src={ThreeLogo}/>
                <span className={'logo-text'}>ThreeJs</span>
            </Link>
            <nav className={'nav-menu'}>
                <Link to={'/'}>Home</Link>
                <Link to={'about'}>About</Link>
                <Link to={'models'}>Models</Link>
            </nav>
        </div>
    );
};

export default Navbar;