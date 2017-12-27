import React from 'react'
import { connect } from 'react-redux'

// import { fetchArticles } from '../actions/search'

class AnalyticsNotification extends React.Component {

  // handleSubmit = (fromSubmit, e) => {
  //   if (typeof e.preventDefault === "function") {
  //     e.preventDefault();
  //   }
  //   const {dispatch} = this.props;
  //   const query = this.form[0].value.trim();
  //   console.log(query, fromSubmit)
  //   if ( query !== '' && query.length > 2) {
  //     dispatch(fetchArticles(query, fromSubmit))
  //   }
  // }

  render() {
    return (
      <div className="mdl-badge" data-badge={gon.count_queries}
           title='Total unique queries' >
        <button className="mdl-button mdl-js-button mdl-button--icon">
          <i className="material-icons">notifications</i>
        </button>
      </div>
    )
  }
}

export default connect()(AnalyticsNotification)
