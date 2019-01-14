import React, { Component } from 'react';

class Card extends Component {
  static defaultProps = {
    imageUrl: 'http://www.presentprovider.com/images/PP4060.jpg'
  };

  render() {
    return <img src={this.props.imageUrl} alt="cardImage" />;
  }
}

export default Card;
