import { REPO_SEARCH } from './../actions/repo-search';
import { DISABLED_BUTTON, ACTIVE_BUTTON } from './../actions/state-button';
import { getResponse } from './../../api/api';

export function repoSearch(value) {
    return (dispatch) => {
        dispatch({
            type: DISABLED_BUTTON,
        });
        getResponse(value)
        .then((data) => {
            dispatch({
                type: REPO_SEARCH,
                payload: data,
            });
            dispatch({
                type: ACTIVE_BUTTON,
            });
        });
    }
}
