import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Container from '../Container/Container'
import ScubaPage from '../../pages/ScubaPage/ScubaPage'
import CoursesPage from '../../pages/CoursesPage/CoursesPage'
import PlacesPage from '../../pages/PlacesPage/PlacesPage'
import ScrollToTop from '../ScrollTop/ScrollTop'
import NotFound from '../NotFound/NotFound'

const Home = () => (
    <div>
    <ScrollToTop />
    <Switch>
        <Route exact path='/' component={Container} />
        <Route path='/discover-scuba' component={ScubaPage} />
        <Route path='/cursos' component={CoursesPage} />
        <Route path='/pontos' component={PlacesPage} />
        <Route path='/*' component={NotFound} />
    </Switch>
    </div>
)

export default Home;