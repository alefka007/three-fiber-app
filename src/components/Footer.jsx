import React from 'react';
import logoVk from '../assets/vk.png';
import logoGithub from '../assets/github.png';
import logoSkype from '../assets/skype.png';

const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className={'icon-container'}>
                <a href={'https://vk.com/id29259893'} target={"_blank"} >
                    <img src={logoVk} alt={'logo vk'} />
                </a>
                <a href={'https://github.com/alefka007'} target={"_blank"} >
                    <img src={logoGithub} alt={'logo github'} />
                </a>
                <a href={'https://join.skype.com/invite/H4DQRCwTYQdQ'} target={"_blank"} >
                    <img src={logoSkype} alt={'logo skype'} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;