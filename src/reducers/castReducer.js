import { FETCH_CREDITS } from '../types';

export default function(state = [], action){
    switch(action.type){
        case FETCH_CREDITS:
        return action.payload || [];
         default:
        return state;
    }
}

