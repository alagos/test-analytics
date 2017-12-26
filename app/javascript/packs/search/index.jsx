import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const SearchForm = props => (
  <div className="search-wrapper">
    <h1>Search</h1>
    <form className='search'>
      <input type="text" name="search" id='search'/>
      <button type='submit'>Search</button>
    </form>
  </div>
)

const SearchResults = props => (
  <div className="results-wrapper">
    <h1>Results</h1>
    {props.results}
  </div>
)

SearchResults.defaultProps = {
  results: []
}

SearchResults.propTypes = {
  results: PropTypes.array
}

const Index = props => (
  <div className="index">
    <SearchForm/>
    <SearchResults/>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Index />,
    document.body.appendChild(document.createElement('div')),
  )
})
