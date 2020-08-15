import { SELECT_NODE, DESELECT_NODE } from '../actionTypes';

export default function(state = 0, action) {
    switch(action.type) {
        case SELECT_NODE:
            const {id} = action.payload;
            return id;
        case DESELECT_NODE: 
            return 0;
        default:
            return state;       
    }
}