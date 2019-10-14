import { FETCH_DISCOVER } from '../types';

export default function(state = false, action){
    switch(action.type){
        case FETCH_DISCOVER:
        return action.payload || false;
         default:
        return state;
    }
}

