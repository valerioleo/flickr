import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.css'

import PhotoGallery from '../PhotoGallery'
import Menu from '../Menu'

// ### ACTIONS
import {fetchData} from 'actions'

class LandingPage extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render(){
    return(
      <div id="landing-page">
        <h3 id="page-title">FLICKR FEED</h3>
        <Menu />
        <PhotoGallery />
        <span id="page-wall">HAND PICKED SHOTS</span>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
}


export default connect(mapStateToProps, {fetchData})(LandingPage)
