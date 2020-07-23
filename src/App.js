import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Form';
import Api from './Api';

class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  };
  render() {
    const { characters } = this.state;
    return (
      <div className='container'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Hello React!</h1>
        <Table characterData={characters} remove={this.removeCharacter} />
        <h2>Add New Character</h2>
        <Form handleSubmit={this.handleSubmit} />
        <h3>Data fetch from api</h3>
        <Api />
      </div>
    );
  }

  /**
   * @description method to remove a character from the characters stored in the state
   * @param index index param
   */
  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((item, i) => index !== i),
    });
  };

  /**
   * @description method used when a form submit with a new character
   * @param character
   */
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };
}

export default App;
