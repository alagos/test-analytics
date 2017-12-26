import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import SearchComponent from '../components/search'
import searchStore from '../stores/search'

render(
  <Provider store={searchStore()}>
    <SearchComponent />
  </Provider>,
  document.getElementById('root-search-index')
)
