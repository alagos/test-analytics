import fetch from 'cross-fetch'

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
export function requestArticles(query) {
  return { type: REQUEST_ARTICLES, query }
}

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
export function receiveArticles(query, json) {
  const articles = (json.news || {}).value
  return { type: RECEIVE_ARTICLES, query, articles: articles }
}

export function fetchArticles(query) {
  return function (dispatch) {
    dispatch(requestArticles(query))
    const params = {
      method: 'GET',
      headers: {
        'Ocp-Apim-Subscription-Key': '9ae5cdcde7e54424bfec36a364a65316'
      }
    };
    const url = `https://api.cognitive.microsoft.com/bing/v7.0/search?q=${query}&responseFilter=News&mkt=en-us`
    console.log(url, params)
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
