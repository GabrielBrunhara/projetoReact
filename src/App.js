import logo from './sapone.png';
import './App.css';

function App() {
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
}

export default App;
