import React from 'react'
import { connect } from 'react-redux'

import AnalyticsModal from './analytics_modal'
import { fetchAnalytics, clearStats } from '../actions/search'

class AnalyticsNotification extends React.Component {
  constructor() {
    super()
    this.state = {displayModal: false}
  }

  loadModal = (e) => {
    const {dispatch} = this.props;
    this.setState({displayModal: true})
    dispatch(fetchAnalytics())
  }

  clearStats = (e) => {
    this.props.dispatch(clearStats())
  }

  render() {
    return (
      <div className="mdl-badge" data-badge={gon.count_queries}
           title='Total unique queries' >
        <button className="mdl-button mdl-js-button mdl-button--icon"
                onClick={this.loadModal.bind(this)} >
          <i className="material-icons">notifications</i>
        </button>
        <AnalyticsModal display={this.state.displayModal}
                        clearStats={this.clearStats.bind(this)} />
      </div>
    )
  }
}

export default connect()(AnalyticsNotification)
