import { REQUEST_ARTICLES, RECEIVE_ARTICLES } from '../actions/search'

function articles(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return Object.assign({}, state, { isFetching: true })
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.articles
      })
    default:
      return state
  }
}


export default function searchReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_ARTICLES:
    case REQUEST_ARTICLES:
      return Object.assign({}, state, {
        [action.query]: articles(state[action.query], action)
      })
    default:
      return state
  }
}
