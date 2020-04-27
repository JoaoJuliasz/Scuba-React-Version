import React from 'react';
import { Link } from 'react-router-dom';

import img from '../../../assets/imgs/aula mar.jpg';

const Courses = () => (
<div className="classNamees">
            <img src={img} alt="" />
            <div className="infos">
                <p className="title">CURSOS DE MERGULHO</p>
                <p>Cursos individuais ou em grupos, com instrutores qualificados.</p>
                <Link to='/cursos'>Saiba Mais</Link>
            </div>
        </div>
);

export default Courses;