import React from 'react'
import { connect } from 'react-redux'
import DebounceInput from 'react-debounce-input'

import { fetchArticles } from '../actions/search'

class Header extends React.Component {
  componentDidMount() {
    document.getElementById('search-input').focus();
  }

  handleSubmit = (fromSubmit, e) => {
    if (typeof e.preventDefault === "function") {
      e.preventDefault();
    }
    const {dispatch} = this.props;
    const query = this.form[0].value.trim();
    console.log(query, fromSubmit)
    if ( query !== '' && query.length > 2) {
      dispatch(fetchArticles(query, fromSubmit))
    }
  }

  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">
            Helpjuice Article Search Engine
          </span>
          <div className="mdh-expandable-search mdl-cell--hide-phone">
            <i className="material-icons">search</i>
            <form onSubmit={this.handleSubmit.bind(this, true)}
                  ref={(form) => this.form = form} >
              <DebounceInput id='search-input' minLength={3} debounceTimeout={400}
                placeholder="Search" onChange={this.handleSubmit.bind(this, false)} />
            </form>
          </div>
        </div>
      </header>
    )
  }
}

export default connect()(Header)
