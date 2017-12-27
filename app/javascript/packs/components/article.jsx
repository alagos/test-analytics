import React from 'react'

export default class Article extends React.Component {
  render(){
    const {name, url, description, image, datePublished} = this.props;
    let imageStyle;
    if (image) {
      imageStyle = { 'backgroundImage': `url('${image.contentUrl}')` }
    }
    return(
      <div className="mdl-cell mdl-cell--4-col">
        <div className="demo-card-wide mdl-card mdl-shadow--2dp">
          <div className="mdl-card__title" style={imageStyle} >
          </div>
          <h2 className="mdl-card__title-text">{name}</h2>
          <div className="mdl-card__supporting-text">
            {description}
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
               href={url} target='_blank'>
              Go to article
            </a>
          </div>
        </div>
      </div>
    )
  }
}
