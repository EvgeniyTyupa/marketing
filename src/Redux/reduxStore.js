import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import multi from 'redux-multi';
import commonReducer from './commonReducer';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    form: formReducer,
    common: commonReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare, multi));

window.store = store;

export default store;