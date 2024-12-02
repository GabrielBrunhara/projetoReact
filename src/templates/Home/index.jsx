//import logo from './sapone.png';
import { Component } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';

export class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {

    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  nextPage = () => {
    const {
      //posts,
      allPosts,
      page,
      postsPerPage
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

    if (nextPosts.length === 0) return;

    //posts.push(...nextPosts);

    this.setState({ posts: nextPosts, page: nextPage })

  }

  previousPage = () => {
    const { allPosts, page, postsPerPage } = this.state;

    const previousPage = Math.max(page - postsPerPage, 0);
    const previousPosts = allPosts.slice(previousPage, previousPage + postsPerPage);

    this.setState({ posts: previousPosts, page: previousPage });
  };

  render() {

    const { posts, allPosts, page, postsPerPage } = this.state;
    const noMorePages = page + postsPerPage >= allPosts.length

    return (
      <section className='container'>
        <Posts posts={posts} />
        <div className='button-container'>
          <Button
            disabled={page === 0}
            text='Voltar'
            onclick={this.previousPage}
          />
          <Button
            disabled={noMorePages}
            text='Avançar'
            onclick={this.nextPage}
          />
        </div>
      </section>
    );
  }
}
