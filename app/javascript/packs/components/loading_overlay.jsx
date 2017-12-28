import React from 'react'

export default class LoadingOverlay extends React.Component{
  componentDidUpdate(prevProps, prevState) {
    // Reload spinner when this is loaded in an update
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
