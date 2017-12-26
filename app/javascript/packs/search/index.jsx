import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Header = props => (
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">

      <span className="mdl-layout-title">Helpjuice Article Search Engine</span>

      <div className="mdh-expandable-search mdl-cell--hide-phone">
        <i className="material-icons">search</i>
        <form action="#">
          <input type="text" placeholder="Search" size="1"/>
        </form>
      </div>

      <div className="mdl-layout-spacer mdl-cell--hide-tablet mdl-cell--hide-desktop"></div>
      <button className="mdh-toggle-search mdl-button mdl-js-button mdl-button--icon mdl-cell--hide-tablet mdl-cell--hide-desktop">
        <i className="material-icons">search</i>
      </button>
    </div>
  </header>
)

const Content = props => (
  <main className="mdl-layout__content">
    <div className="page-content">{props.results}</div>
  </main>
)

Content.defaultProps = {
  results: []
}

Content.propTypes = {
  results: PropTypes.array
}

const Index = props => (
  <div className="mdl-layout mdl-js-layout">
    <Header/>
    <Content/>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Index />,
    document.body.appendChild(document.createElement('div')),
  )
})
