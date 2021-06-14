import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './appReducer';
import vkReducer from './vkReducer';

let reducers = combineReducers({
    appData: appReducer,
    vkData: vkReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)))

window.__store__ = store;
export default store;