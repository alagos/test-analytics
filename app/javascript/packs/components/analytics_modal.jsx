import React from 'react'
import { connect } from 'react-redux'

import AnalyticRow from './analytic_row'

class AnalyticsModal extends React.Component {
  componentDidUpdate() {
    const {dialog} = this;
    if (! dialog.showModal) { dialogPolyfill.registerDialog(dialog); }
    if (this.props.display && !dialog.open) { dialog.showModal(); }
  }

  closeDialog() {
    this.dialog.close()
  }

  render() {
    const {analytics} = this.props;
    let analyticRows;
    if (analytics) {
      analyticRows = analytics.map((analytic, idx) => {
        return <AnalyticRow key={`analytic-${idx}`} {...analytic} />
      })

    }
    return (
      <dialog className="analytics-modal mdl-dialog"
              ref={(dialog) => this.dialog = dialog} >
        <h4 className="mdl-dialog__title">Analytics</h4>
        <div className="mdl-dialog__content"  >
          <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp" >
            <thead>
              <tr>
                <th className='mdl-data-table__cell--non-numeric'>Query</th>
                <th># of searches</th>
              </tr>
            </thead>
            <tbody>
              {analyticRows}
            </tbody>
          </table>
        </div>
        <div className="mdl-dialog__actions">
          <button type="button" className="mdl-button close"
                  onClick={this.closeDialog.bind(this)} >
            Close
          </button>
        </div>
      </dialog>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    isFetchingAnalytics: state.isFetchingAnalytics,
    analytics: state.analytics
  }
}

export default connect(mapStateToProps)(AnalyticsModal)
