import { REQUEST_ARTICLES, RECEIVE_ARTICLES } from '../actions/search'

export default function searchReducer(state = {}, action) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return Object.assign({}, state, { isFetching: false })
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true,
        articles: action.articles
      })
    default:
      return state
  }
}
