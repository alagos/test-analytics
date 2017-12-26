import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import searchReducer from '../reducers/search'
import SearchComponent from '../components/search'

let store = createStore(searchReducer, applyMiddleware(thunkMiddleware))

render(
  <Provider store={store}>
    <SearchComponent />
  </Provider>,
  document.getElementById('root-search-index')
)
