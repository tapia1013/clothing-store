import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';


import rootReducer from '../root-reducer';


// logger middleware is like redux tool to see state
const middlewares = [logger];


const store = createStore(rootReducer, applyMiddleware(...middlewares))


export default store;