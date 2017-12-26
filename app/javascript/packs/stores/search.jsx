import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { createStore, compose, applyMiddleware } from 'redux'

import searchReducer from '../reducers/search'

export default function configureStore(state) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    searchReducer,
    state,
    composeEnhancers(
      applyMiddleware(thunkMiddleware)
    )
  )
}
