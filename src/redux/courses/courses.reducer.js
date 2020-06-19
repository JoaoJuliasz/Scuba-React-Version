import { TOOGLE_SHOW_DESCRIPTION } from './courses.types'

const initialState = {
    hide: true,
}

const coursesReducer = (state = initialState, action) => {
    switch(action.type){
        case TOOGLE_SHOW_DESCRIPTION:
            return {
                ...state,
                hide: !state.hide
            }
        default: return state
    }
}

export default coursesReducer