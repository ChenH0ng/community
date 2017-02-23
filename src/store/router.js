import {UPDATE_ACTIVE_PATH,UPDATE_NEXT_PATH,} from '../types';

const initialState = {
    activePath: '/home',
    nextPath: '/home',
};

export default(state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ACTIVE_PATH:
            return {...state, activePath: action.activePath};
        case UPDATE_NEXT_PATH:
            return {...state, nextPath: action.nextPath};
        default:
            return state;
    }
};