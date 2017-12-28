import fetch from 'cross-fetch'

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
export function requestArticles(query) {
  return { type: REQUEST_ARTICLES, query: query }
}

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
export function receiveArticles(json) {
  const articles = (json.news || {}).value || []
  return { type: RECEIVE_ARTICLES, articles: articles }
}

export const REQUEST_ANALYTICS = 'REQUEST_ANALYTICS'
export function requestAnalytics() {
  return { type: REQUEST_ANALYTICS }
}

export const RECEIVE_ANALYTICS = 'RECEIVE_ANALYTICS'
export function receiveAnalytics(json) {
  return { type: RECEIVE_ANALYTICS, analytics: json }
}

export function fetchArticles(query, mustToSave) {
  return function (dispatch, getState) {
    const oldQuery = getState().query;
    if (mustToSave) { saveQuery(query) }
    if (oldQuery != query) {
      dispatch(requestArticles(query))
      const params = {
        method: 'GET',
        headers: {
          'Ocp-Apim-Subscription-Key': '9ae5cdcde7e54424bfec36a364a65316'
        }
      };
      const url = `https://api.cognitive.microsoft.com/bing/v7.0/search?q=${query}&responseFilter=News&mkt=en-us`
      return fetch(url, params)
        .then(
          response => response.json(),
          error => console.error('An error occurred.', error)
        )
        .then(json =>
          dispatch(receiveArticles(query, json))
        )
    }
  }
}

export function fetchAnalytics() {
  return function (dispatch) {
    dispatch(requestAnalytics())

    return fetch('/analytics', params()).then(
        response => response.json(),
        error => console.error('An error occurred.', error)
      ).then(json =>
        dispatch(receiveAnalytics(json))
      )
  }
}

export function clearStats() {
  return function (dispatch) {
    return fetch('/analytics', params({ method: 'DELETE'})).then(
        response => [],
        error => console.error('An error occurred.', error)
      ).then(json =>
        dispatch(receiveAnalytics(json))
      )
  }
}

function saveQuery(query) {
  fetch('/analytics', params({
      method: 'POST',
      body: JSON.stringify({query: query})
    }))
}

function params(newParams = {}) {
  const csrfToken = document.querySelector("meta[name=csrf-token]").content
  newParams['headers'] = {
    'X-CSRF-Token': csrfToken,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
  return newParams
}
