//import logo from './sapone.png';
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    counter: 0,
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

  timeOutUpdate = null;


  componentDidMount() {
    this.handleTimeOut();
  }

  componentDidUpdate() {
    this.handleTimeOut();
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutUpdate);
  }

  handleTimeOut = (() => {
    const { posts, counter } = this.state;
    if (posts[0].tittle === 'Dom') {
      posts[0].tittle = 'O tal do Dom';
    }else{
      posts[0].tittle = 'Dom';
    }

    this.timeOutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
    }, 1000);
  })

  render() {

    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
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
