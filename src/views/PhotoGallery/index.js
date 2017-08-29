import React, {Component} from 'react'
import {connect} from 'react-redux'
import './style.css'
import PhotoItem from '../PhotoItem'

// ### ACTIONS
import {} from 'actions'

class PhotoGallery extends Component {
  renderPhotoItems() {
    return this.props.items.map(item => <PhotoItem selected={item.title === this.props.selectedImage} item={item} key={item.link}/>) //using the link as key because there is no id in the photo item
  }

  render(){
    if (!this.props.items) {
      return "Loading..."
    }

    return(
      <div id="photo-gallery-wrapper">
        {this.renderPhotoItems()}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, null)(PhotoGallery)
