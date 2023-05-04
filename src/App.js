import React, { Component } from 'react';
import Navbar from './components/navbar';
import Card from './components/card';

import lasagna from './images/lasagna.jpg';
import bolognese from './images/bolognese.jpg';
import spaghetti from './images/spaghetti.jpg';
import pastapatate from './images/pastapatate.jpg';

class App extends Component {
  state = {
    cards: [
      { id: 0, nome: "Lasagna", prezzo: 1.99, immagine: lasagna, quantità: 0 },
      { id: 1, nome: "Tagliatelle alla Bolognese", prezzo: 3.19, immagine: bolognese, quantità: 0 },
      { id: 2, nome: "Speghetti alle vongole", prezzo: 2.49, immagine: spaghetti, quantità: 0 },
      { id: 3, nome: "Pasta e patate", prezzo: 4.99, immagine: pastapatate, quantità: 0 }
    ]
  }
  /* Elimina Card */
  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({ cards });
  }
  /* Aggiunta Quantità */
  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantità++;
    this.setState({ cards });

  }
 
  render() {
    return (
      <>
        <Navbar />
        <div className='container'>
          <h1>Il nostro menù</h1>
          <hr />
          <div className='row'>
            {this.state.cards.map(card => (
              <Card
                key={card.id}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                card={card} />

            ))}
          </div>
        </div>


      </>
    );
  }
}
export default App;
