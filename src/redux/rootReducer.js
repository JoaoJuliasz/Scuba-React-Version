import { combineReducers } from 'redux'
import placesReducer from './places/places.reducer'
import coursesReducer from './courses/courses.reducer'
import centerReducer from './center/center.reducer'
const rootReducer = combineReducers({
    places: placesReducer,
    courses: coursesReducer,
    center: centerReducer,
})

export default rootReducer