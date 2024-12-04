//import logo from './sapone.png';
import { Component } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { Search } from '../../components/Search/';
import { Loading } from '../../components/Loading';

export class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    searchValue: '',
    isLoading: true
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    this.setState({ isLoading: true });

    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
      isLoading: false,
    });
  }

  handleNextPage = () => {
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

  handlePreviousPage = () => {
    const { allPosts, page, postsPerPage } = this.state;

    const previousPage = Math.max(page - postsPerPage, 0);
    const previousPosts = allPosts.slice(previousPage, previousPage + postsPerPage);

    this.setState({ posts: previousPosts, page: previousPage });
  };

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({ searchValue: value })
  }

  render() {

    const { posts, allPosts, page, postsPerPage, searchValue, isLoading } = this.state;
    const noMorePages = page + postsPerPage >= allPosts.length

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
      : posts;

    return (
      <section className='container'>

        <Search
          placeholder='Search'
          value={searchValue}
          onChange={this.handleChange}
          onFocus='Type something'
        />

        {isLoading ? (
          <Loading />
        ) : filteredPosts.length > 0 || searchValue === '' ? (
          <Posts posts={filteredPosts} />
        ) : (
          <p className='message'>No results for <br /> "{searchValue}"</p>
        )}

        <div className='button-container'>
          {!searchValue && (
            <>
              <Button
                disabled={page === 0}
                text='←'
                onclick={this.handlePreviousPage}
              />
              <Button
                disabled={noMorePages}
                text='→'
                onclick={this.handleNextPage}
              />
            </>
          )}
        </div>
      </section>
    );
  }
}
