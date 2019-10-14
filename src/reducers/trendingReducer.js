import { FETCH_TRENDING } from '../types';

export default function(state = false, action){
    switch(action.type){
        case FETCH_TRENDING:
        return action.payload || false;
         default:
        return state;
    }
}

