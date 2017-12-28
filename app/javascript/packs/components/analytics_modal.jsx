import React from 'react'
import { connect } from 'react-redux'

class AnalyticsModal extends React.Component {
  componentDidUpdate() {
    const dialog = this.dialog;

    if (! dialog.showModal) { dialogPolyfill.registerDialog(dialog); }
    if (this.props.display) { dialog.showModal(); }

    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });
  }

  render() {
    return (
      <dialog className="mdl-dialog" ref={(dialog) => this.dialog = dialog} >
        <div className="mdl-dialog__content">
          <p>
            Allow this site to collect usage data to improve your experience?
          </p>
        </div>
        <div className="mdl-dialog__actions mdl-dialog__actions--full-width">
          <button type="button" className="mdl-button">Agree</button>
          <button type="button" className="mdl-button close">Disagree</button>
        </div>
      </dialog>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    analytics: state.analytics
  }
}

export default connect(mapStateToProps)(AnalyticsModal)
