import { REPO_SEARCH } from './../actions/repo-search';
import { DISABLED_BUTTON, ACTIVE_BUTTON } from './../actions/state-button';
<<<<<<< HEAD
import { getResponse } from './../../api/api';
=======
import { getResponse, getNextPage } from './../../api/api';
>>>>>>> ee20d556fec47173bf49c4db43a59492dc8897f4

export function repoSearch(value) {
    return (dispatch) => {
        dispatch({
            type: DISABLED_BUTTON,
        });
        getResponse(value)
        .then((data) => {
            dispatch({
                type: REPO_SEARCH,
<<<<<<< HEAD
                payload: data.items,
=======
                payload: data,
>>>>>>> ee20d556fec47173bf49c4db43a59492dc8897f4
            });
            dispatch({
                type: ACTIVE_BUTTON,
            });
        });
    }
}
<<<<<<< HEAD
=======

export function getPage(number) {
    return (dispatch) => {
        dispatch({
            type: DISABLED_BUTTON,
        });
        getNextPage(number)
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

>>>>>>> ee20d556fec47173bf49c4db43a59492dc8897f4
