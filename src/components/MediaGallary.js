import React, { Component } from 'react'
import Gallery from 'react-grid-gallery';


 
export default class MediaGallary extends Component {
 
  render() {
 
 
    return (
  
      <Gallery images={this.props.images}/>
    );
  }
 
}