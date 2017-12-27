import React from 'react'

export default class LoadingOverlay extends React.Component{
  componentDidUpdate(prevProps, prevState) {
    if (this.props.show){
      componentHandler.upgradeDom();
    }
  }
  render(){
    if (this.props.show){
      return(
        <div className="overlay">
          <div className="center">
            <div className="mdl-spinner mdl-js-spinner is-active" />
          </div>
        </div>
      )
    }else{
      return <div/>
    }
  }
}
