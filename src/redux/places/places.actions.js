import {CHANGE_IMG_PATH, TOOGLE_SHOW_DESCRIPTION} from './places.types'

export const changeImgPath = img => {
    return {
        type: CHANGE_IMG_PATH,
        payload: img,
    }
}

export const toogleShowDescription = () => {
    return {
        type: TOOGLE_SHOW_DESCRIPTION,
    }
}