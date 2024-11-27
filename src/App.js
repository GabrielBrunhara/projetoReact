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
          href="https://www.tiktok.com/@_clip_n_chill"
          target="_blank"
          rel="noopener noreferrer"
        >
          TikTok
        </a>
      </header>
    </div>
  );
}

export default App;
