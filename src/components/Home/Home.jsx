import React from 'react';
import {Route} from 'react-router-dom'

import Container from '../Container/Container'
import ScubaPage from '../ScubaPage/ScubaPage'
import CoursesPage from '../CoursesPage/CoursesPage'
import PlacesPage from '../PlacesPage/PlacesPage'

const Home = () => (
    <div>
        <Route exact path='/' component={Container} />
        <Route path='/discover-scuba' component={ScubaPage} />
        <Route path='/cursos' component={CoursesPage} />
        <Route path='/pontos' component={PlacesPage} />
    </div>
)

export default Home;