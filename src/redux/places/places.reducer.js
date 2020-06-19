import { CHANGE_IMG_PATH, TOOGLE_SHOW_DESCRIPTION } from './places.types'

const initialState = {
    hide: true,
    imgUrl: 'anchieta 2.jpg',
}

const placesReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_IMG_PATH: 
        return {
            ...state,
            imgUrl: action.payload
        }
        case TOOGLE_SHOW_DESCRIPTION:
            return {
                ...state,
                hide: !state.hide
            }
        default: return state
    }
}

export default placesReducer