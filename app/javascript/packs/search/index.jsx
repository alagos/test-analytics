import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'
import Content from './content'

const Index = props => (
  <div className="mdl-layout mdl-js-layout">
    <Header/>
    <Content/>
  </div>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Index />,
    document.body.appendChild(document.createElement('div')),
  )
})
