import React from 'react';
import { Link } from 'react-router-dom'
import img from '../../../assets/imgs/anchieta 2.jpg';

const Places = () => (
    <div className="divePlaces">
        <img src={img} alt="lugares para mergulhar" />
        <div className="infos">
            <p className="title">PONTOS DE MERGULHO/<br />VALORES</p>
            <p>Ubatuba conta com excelentes pontos de mergulho.</p>
            <Link to='/pontos'>Saiba Mais</Link>
        </div>
    </div>
);

export default Places;