import React from 'react';
import {Link} from 'react-router-dom'

import img from '../../../assets/imgs/mergulho.jpg';

const Scuba = () => (
<div className="scuba-dive">
            <img src={img} alt="scuba" />
            <div className="infos">
                <p className="title">DISCOVER SCUBA</p>
                <p>Mergulho na cia. de
                    um profissional da
                    área para quem
                    não tem curso</p>
                    {/* Aqui vai o Link para o componente */}
                <Link to='/discover-scuba' >Saiba Mais</Link>
            </div>
        </div>
);

export default Scuba;