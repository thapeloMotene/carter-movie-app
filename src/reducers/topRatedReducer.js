import { FETCH_TOP_RATED } from '../types';

export default function(state = false, action){
    switch(action.type){
        case FETCH_TOP_RATED:
        return action.payload || false;
         default:
        return state;
    }
}

