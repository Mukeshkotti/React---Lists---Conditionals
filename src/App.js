import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  InputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  charDeleteHandler = (index) => {
    const text = this.state.userInput.split('')
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText})
  }

  render() {
    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char character={char} key={index} deleteChar={() =>this.charDeleteHandler(index)} />;
    })
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <input type="text" onChange={this.InputChangeHandler} value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation stringLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }

}

export default App;
