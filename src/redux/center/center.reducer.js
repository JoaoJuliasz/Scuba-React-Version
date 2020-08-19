import { CHANGE_CENTER_IMG_PATH } from './center.types'

const initialState = {
    centerImgUrl: 'slide1.jpg',
} 

const centerReducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGE_CENTER_IMG_PATH: 
        return {
            centerImgUrl: action.payload
        }
        default: return state
    }
}

export default centerReducer