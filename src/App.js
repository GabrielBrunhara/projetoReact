import logo from './sapone.png';
import './App.css';
import { Component } from 'react';

class App extends Component{

  /* constructor(props){
    super(props);

    this.handlePClick = this.handlePClick.bind(this); 

    this.state = {
      name: 'Dom Sapone',
      counter: 0
    };
  } */

    state = {
      name: 'Dom Sapone',
      counter: 0
    };

  handlePClick = (name) => {
    if(name === 'Dom Sapone'){
    this.setState({ name: 'Dom Sapones' });
    }else{
      this.setState({ name: 'Dom Sapone' });
    }
    console.log("O Mais Pica");
  }

  handleAClick = (event) => {
    event.preventDefault();
    const {counter} = this.state;
    this.setState({counter: counter + 1})
  }

  render(){

    //const name = this.state.name;
    const {name, counter} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={() => this.handlePClick(name)}>
            {name} {counter}
          </p>
          <a
            className="App-link"
            href="https://www.tiktok.com/@domsapone"
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok
          </a>
          <a
            className="App-link"
            href="https://www.instagram.com/dom_sapone"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a 
          onClick={this.handleAClick}
            className='App-link'
            href='.'
            target='blank'
          >
            Plus
          </a>
        </header>
      </div>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dom sapone
        </p>
        <a
          className="App-link"
          href="https://www.tiktok.com/@domsapone"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok
        </a>
        <a
          className="App-link"
          href="https://www.instagram.com/dom_sapone"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </header>
    </div>
  );
} */

export default App;
