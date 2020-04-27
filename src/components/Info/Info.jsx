import React from 'react';

import Scuba from './scubaDive/ScubaDive'
import Courses from './Cursos/Courses'
import Places from './Places/Places'

const Info = () => (
    <div className='info'>
        <Scuba />
        <Courses />
        <Places />
    </div>
);

export default Info;