import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
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
  }
}
