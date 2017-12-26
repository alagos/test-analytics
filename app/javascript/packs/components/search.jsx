import React from 'react'
import ReactDOM from 'react-dom'

import Header from './header'
import Content from './content'

export default props => (
  <div className="mdl-layout mdl-js-layout">
    <Header/>
    <Content/>
  </div>
)
