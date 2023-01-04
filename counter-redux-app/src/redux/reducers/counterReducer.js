import { DECREMENT, INCREMENT } from './../actions/types';

export default function counterReducer(state = {count: 0}, action) {

    switch(action.type){
        case INCREMENT:
            return {...state, count: state.count + 1};
        case DECREMENT:
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}