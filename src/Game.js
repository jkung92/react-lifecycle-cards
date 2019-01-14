import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

class Game extends Component {
  static defaultProps = { apiUrl: 'https://deckofcardsapi.com/api' };

  constructor(props) {
    super(props);
    this.state = { deckId: '', cards: [] };
    // this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    let response = await axios.get(
      `${this.props.apiUrl}/deck/new/shuffle/?deck_count=1`
    );
    console.log(`this is response in mount`, response);
    let deckId = response.data.deck_id;
    this.setState({ deckId });
  }

  handleClick = async () => {
    let response = await axios.get(
      `${this.props.apiUrl}/deck/${this.state.deckId}/draw/?count=1`
    );
    let cardImageUrl = response.data.cards[0].image;
    let newCards = [...this.state.cards, cardImageUrl];
    this.setState({
      cards: newCards
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> Gimme A Card! </button>
        <div className="container">
          {this.state.cards.map(cardImageUrl => (
            <Card imageUrl={cardImageUrl} />
          ))}
        </div>
      </div>
    );
  }
}

export default Game;
