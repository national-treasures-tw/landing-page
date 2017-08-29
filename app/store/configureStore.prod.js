import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/root';


const enhancer = applyMiddleware(thunkMiddleware);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
