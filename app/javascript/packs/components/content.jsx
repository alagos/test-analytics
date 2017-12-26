import React from 'react'
import { connect } from 'react-redux'

import Article from './article'

class Content extends React.Component {
  render() {
    const {isFetching, articles} = this.props;
    console.log('Content', isFetching, articles)
    let articleDivs;
    if (articles) {
      articleDivs = articles.map((article, idx) => {
        return <Article key={`article-${idx}`} {...article} />
      })
    }
    return (
      <main className="mdl-layout__content">
        <div className="page-content">
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
