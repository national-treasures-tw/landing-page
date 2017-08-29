import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers/root';


const loggingMiddleware = createLogger();

/* eslint-disable no-underscore-dangle */

const enhancer = applyMiddleware(loggingMiddleware, thunkMiddleware)

/* eslint-enable */

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers/root', () =>
      store.replaceReducer(require('../reducers/root')),
    );
  }

  return store;
}
