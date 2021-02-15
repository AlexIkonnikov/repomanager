import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchReducer } from './reducers/search-reducer';
import { stateButtonReducer } from './reducers/state-button';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
    search: searchReducer,
    button: stateButtonReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
