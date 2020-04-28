import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
    <div className="center">
        <h1>Ops... Url errada, clique no botão para ir para página principal</h1>
        <Link to='/'>Saiba Mais</Link>
    </div>
);

export default NotFound;