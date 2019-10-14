import { FETCH_MOVIE } from '../types';

export default function(state = false, action){
    switch(action.type){
        case FETCH_MOVIE:
        return action.payload || false;
         default:
        return state;
    }
}

