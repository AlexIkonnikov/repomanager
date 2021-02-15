import { DISABLED_BUTTON, ACTIVE_BUTTON } from './../actions/state-button';

export function buttonDisabled() {
    return (dispatch) => {
        dispatch({
            type: DISABLED_BUTTON,
        });
    }
}

export function buttonActive() {
    return (dispatch) => {
        dispatch({
            type: ACTIVE_BUTTON,
        });
    }
}