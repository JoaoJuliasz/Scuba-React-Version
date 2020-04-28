import React from 'react';

const Footer = () => (
    <div className="footer">
        <p>Designed By João Juliasz de Morais</p>
        <div className="scubaSchool">
            <img src={require("../../assets/imgs/padi.png")} className="padi" alt="padi" />
            <img src={require("../../assets/imgs/sdi.jpg")} className="sdi" alt="sdi" />
        </div>
    </div>
);

export default Footer;