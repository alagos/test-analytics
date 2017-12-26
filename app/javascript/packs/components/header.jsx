import React from 'react'
import { connect } from 'react-redux'

import { fetchArticles } from '../actions/search'

class Header extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch} = this.props;
    const query = this.form[0].value;
    console.log(query)
    dispatch(fetchArticles(query))
  }

  render() {
    return (
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">

          <span className="mdl-layout-title">Helpjuice Article Search Engine</span>

          <div className="mdh-expandable-search mdl-cell--hide-phone">
            <i className="material-icons">search</i>
            <form onSubmit={this.handleSubmit.bind(this)}
                  ref={(form) => this.form = form} >
              <input type="text" placeholder="Search" size="1" name='query' />
            </form>
          </div>
        </div>
      </header>
    )
  }
}

export default connect()(Header)
