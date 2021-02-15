import { REPO_SEARCH } from './../actions/repo-search';
const initialState = {
    repo: [],
};

export function searchReducer(state = initialState, action) {
    switch(action.type) {
        case REPO_SEARCH: 
            return Object.assign({},{repo: action.payload});
        default: return state;
    }
}
