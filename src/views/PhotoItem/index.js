import React, {Component} from 'react'
import './style.css'

class PhotoItem extends Component {
  renderTags = () => {
      if(!!this.props.item.tags) {
        return <div>TAGS: {this.props.item.tags} </div>
      }
  }

  renderDetails = (e) => {
    const {item} = this.props
    e.preventDefault()

    return (
      <div>
        <span>{item.title}</span> by <strong>{item.author}</strong>
        {this.renderTags()}
      </div>
    )
  }

  render(){
    const {item} = this.props
    return(
      <div className="photo-gallery-item" onClick={this.renderTags}>
        <img src={item.media.m} alt="flickr content"/>

      </div>
    )
  }
}

export default PhotoItem
