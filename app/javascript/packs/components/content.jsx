import React from 'react'
import { connect } from 'react-redux'

import Article from './article'
import LoadingOverlay from './loading_overlay'

class Content extends React.Component {
  render() {
    const {isFetchingArticles, articles} = this.props;
    console.log('Content', isFetchingArticles, articles)
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
        <LoadingOverlay show={isFetchingArticles} />
      </main>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    isFetchingArticles: state.isFetchingArticles,
    articles: state.articles
  }
}

export default connect(mapStateToProps)(Content)
