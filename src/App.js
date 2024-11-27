import logo from './sapone.png';
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    posts: [
      {
        id: 1,
        tittle: 'Dom',
        body: 'Sapone1'
      },
      {
        id: 2,
        tittle: 'Dona',
        body: 'Sapone2'
      },
      {
        id: 3,
        tittle: 'Donim',
        body: 'sapone3'
      },
    ]
  };

  render() {

    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1 className='App-link'> {post.tittle} </h1>
            <p> {post.body} </p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
