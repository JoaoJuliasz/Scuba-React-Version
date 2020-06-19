import {CHANGE_CENTER_IMG_PATH,} from './center.types'

export const changeImgPath = img => {
    return {
        type: CHANGE_CENTER_IMG_PATH,
        payload: img,
    }
}