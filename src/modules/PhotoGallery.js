import React, { Component } from 'react';
import './modules.css';

class Photos extends Component {
  constructor(props){
    super(props)
    this.images = this.importImages(require.context('../../img', false, /\.(jpg|JPG|PNG)$/))
    this.slides = this.images.map((image) => <div className="Slide"><img className="Image"src={image} alt="" /></div>)
  }

  importImages = (r) => {
    return r.keys().map(r);
  }

  createDots = () => {
    var dots = [];
    for (var i=0; i<this.images.length; i++) {
        dots.push(<span className="Dot" onClick={this.currentSlide(i)} key={i}></span>);
    }
    return dots;
  }

	render() {
    console.log(this.images.length)
		return (
      <div className="PhotosTile">
        <div className="TileTitle">Photo Gallery</div>
        <hr />
        <div className="Slideshow">
          {this.slides}
        </div>

      </div>
		)
	}
}


export default Photos;
