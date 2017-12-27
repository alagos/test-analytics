import React from 'react'

import SearchForm from './search_form'
import AnalyticsNotification from './analytics_notification'

export default class Header extends React.Component {
  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">
            Helpjuice Article Search Engine
          </span>
          <SearchForm />
          <AnalyticsNotification />
        </div>
      </header>
    )
  }
}
