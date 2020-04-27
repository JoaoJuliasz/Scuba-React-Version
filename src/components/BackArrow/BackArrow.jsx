import React from 'react';
import { Link } from 'react-router-dom'
const BackArrow = () => (
    <div className="back">
        <Link to='/' > <i className="fas fa-arrow-left"></i></Link>
    </div>

)

export default BackArrow;