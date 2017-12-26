import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import searchReducer from '../reducers/search'
import SearchComponent from '../components/search'

let store = createStore(searchReducer)

render(
  <Provider store={store}>
    <SearchComponent />
  </Provider>,
  document.body
)
