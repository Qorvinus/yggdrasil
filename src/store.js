import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import yggdrasilReducer from './reducers';

const store = createStore(yggdrasilReducer, applyMiddleware(thunk));

export default store;
