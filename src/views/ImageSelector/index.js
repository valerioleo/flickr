import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.css'

class ImageSelector extends Component {
  render() {
    return (
      <div id="image-selector">
        <div id="image-selector-left">
          left
        </div>
        <div id="image-selector-right">
          right
        </div>
      </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {}
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {}
// }

export default connect(null, null)(ImageSelector)
