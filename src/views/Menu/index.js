import React, {Component} from 'react'
import {connect} from 'react-redux'

import './style.css'

class Menu extends Component {
  render(){
    return(
      <div id="menu">
        YOU FLICKR FEED
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    tags: state.tags
  }
}

export default connect(mapStateToProps, null)(Menu)
