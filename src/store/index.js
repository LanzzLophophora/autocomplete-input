import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { emails } from './users';

const redux_devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(
  emails,
  compose(
    applyMiddleware(thunk),
    redux_devtools
  )
);
