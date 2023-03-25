import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { summariesReducers } from './reducers/summariesReducer';

const reducer = combineReducers({
    summaries: summariesReducers,
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;