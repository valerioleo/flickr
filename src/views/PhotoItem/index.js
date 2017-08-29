import React, {Component} from 'react'
import './style.css'

class PhotoItem extends Component {
  renderTags = () => {
      if(!!this.props.item.tags) {
        return <div className="photo-gallery-item-tags">TAGS: <strong>{this.props.item.tags}</strong> </div>
      }
  }

  render(){
    const {item} = this.props
    return(
      <div className="photo-gallery-item">
        <img src={item.media.m} alt="flickr content"/>

        <div className="photo-gallery-item-details">
          <div>{item.title}</div> by <strong>{item.author}</strong>
          {this.renderTags()}
        </div>
      </div>
    )
  }
}

export default PhotoItem
