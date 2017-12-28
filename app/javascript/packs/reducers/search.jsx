import { REQUEST_ARTICLES, RECEIVE_ARTICLES, REQUEST_ANALYTICS,
         RECEIVE_ANALYTICS,  } from '../actions/search'

export default function searchReducer(state = {}, action) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return Object.assign({}, state, {
        isFetchingArticles: true,
        query: action.query
      })
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        isFetchingArticles: false,
        articles: action.articles
      })
    case REQUEST_ANALYTICS:
      return Object.assign({}, state, { isFetchingAnalytics: true })
    case RECEIVE_ANALYTICS:
      return Object.assign({}, state, {
        isFetchingAnalytics: false,
        analytics: action.analytics
      })
    default:
      return state
  }
}
