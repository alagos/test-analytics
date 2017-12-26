import React from 'react'
import { connect } from 'react-redux'

import Article from './article'

class Content extends React.Component {
  render() {
    const {isFetching, articles} = this.props;
    console.log('Content', isFetching, articles)
    let articleDivs;
    if (articles) {
      if (articles.length > 0) {
        articleDivs = articles.map((article, idx) => {
          return <Article key={`article-${idx}`} {...article} />
        })
      } else {
        articleDivs =
          <div className="centeritems mdl-grid">
            <div className="mdl-cell mdl-cell--12-col mdl-typography--display-2">
              No articles found
            </div>
          </div>
      }
    }
    return (
      <main className="mdl-layout__content">
        <div className="content-grid mdl-grid">
          {articleDivs}
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    isFetching: state.isFetching,
    articles: state.articles
  }
}

export default connect(mapStateToProps)(Content)
