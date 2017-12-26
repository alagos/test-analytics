import React from 'react'
import ReactDOM from 'react-dom'

const SearchForm = props => (
  <div className="search-wrapper">
    <h1>Search</h1>
    <form className='search'>
      <input type="text" name="search" id='search'/>
      <button type='submit'>Search</button>
    </form>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SearchForm />,
    document.body.appendChild(document.createElement('div')),
  )
})
