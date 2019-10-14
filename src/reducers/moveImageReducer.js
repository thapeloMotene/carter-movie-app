

import { FETCH_IMAGES } from '../types';

export default function(state = false, action){
    switch(action.type){
        case FETCH_IMAGES:
        return action.payload || false;
         default:
        return state;
    }
}

