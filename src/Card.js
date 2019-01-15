import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  static defaultProps = {
    imageUrl: 'http://www.presentprovider.com/images/PP4060.jpg'
  };

  render() {
    let styleObj = { transform: `rotate(${this.props.randomRotation}deg)` };
    return (
      <img
        src={this.props.imageUrl}
        alt="cardImage"
        className="cardImg"
        style={styleObj}
      />
    );
  }
}

export default Card;
