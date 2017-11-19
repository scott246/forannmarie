import React, { Component } from 'react';
import './modules.css';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

// Component for gallery
export default class Gallery extends Component{
  constructor(props) {
    super(props);
    this.images = this.importImages(require.context('../../img', false, /\.(jpg|JPG|PNG)$/));
  }

  importImages = (r) => {
    return r.keys().map(r);
  }

  items = []

  renderImages = () => {
    for (var i = 0; i < this.images.length; i++) {
      this.items.push({original: this.images[i]})
    }
  }

  render() {
    this.renderImages();
    return (
      <div className="PhotosTile">
        <div className="TileTitle">Photo Gallery</div>
        <hr />
        <div>
          <ImageGallery
            items={this.items}
            showIndex={true}
            showBullets={true}
            showThumbnails={false}
            />
        </div>
      </div>
    )
  }
}
