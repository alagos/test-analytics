import React from 'react'
import PropTypes from 'prop-types'

class Content extends React.Component {
  render() {
    return (
      <main className="mdl-layout__content">
        <div className="page-content">{this.props.results}</div>
      </main>
    )
  }
}

Content.defaultProps = {
  results: []
}

Content.propTypes = {
  results: PropTypes.array
}

export default Content
