import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.css'

import PhotoGallery from '../PhotoGallery'
import Menu from '../Menu'
import ImageSelector from '../ImageSelector'

// ### ACTIONS
import {fetchData} from 'actions'

class LandingPage extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render(){
    return(
      <div id="landing-page">
        <h3 id="page-title">TITLE</h3>
        <Menu />
        <PhotoGallery />
        <ImageSelector />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {

  }
}


export default connect(mapStateToProps, {fetchData})(LandingPage)
