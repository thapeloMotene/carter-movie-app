import { FETCH_REVIEWS } from '../types';

export default function(state = false, action){
    switch(action.type){
        case FETCH_REVIEWS:
        return action.payload || false;
         default:
        return state;
    }
}

