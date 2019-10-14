import { FETCH_NOW_PLAYING } from '../types';

export default function(state = false, action){
    switch(action.type){
        case FETCH_NOW_PLAYING:
        return action.payload || false;
         default:
        return state;
    }
}

