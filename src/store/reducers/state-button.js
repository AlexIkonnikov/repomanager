import { ACTIVE_BUTTON, DISABLED_BUTTON } from './../actions/state-button';

const initialState = {
    isDisabled: false,
};

export function stateButtonReducer(state = initialState, action) {
    switch(action.type) {
        case DISABLED_BUTTON: 
            return Object.assign({}, {isDisabled: true});
        case ACTIVE_BUTTON: 
            return Object.assign({}, {isDisabled: false});
        default: return state;
    }
}