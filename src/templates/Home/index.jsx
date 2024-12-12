import { useCallback, useEffect, useState } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/load-posts';
import { Button } from '../../components/Button';
import { Search } from '../../components/Search/';
import { Loading } from '../../components/Loading';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setallPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(4);
  const [searchValue, setsearchValue] = useState('');
  const [isLoading, setisLoading] = useState(true);

  const noMorePages = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    setisLoading(true);

    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setallPosts(postsAndPhotos);
    setisLoading(false);
  }, []);

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const handleNextPage = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    if (nextPosts.length > 0) {
      setPosts(nextPosts);
      setPage(nextPage);
    }
  };

  const handlePreviousPage = () => {
    const previousPage = Math.max(page - postsPerPage, 0);
    const previousPosts = allPosts.slice(previousPage, previousPage + postsPerPage);

    if (page > 0) {
      setPosts(previousPosts);
      setPage(previousPage);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;

    setsearchValue(value);
  };

  return (
    <section className="container">
      <Search placeholder="Search" value={searchValue} onChange={handleChange} onFocus="Type something..." />

      {isLoading ? (
        <Loading />
      ) : filteredPosts.length > 0 || searchValue === '' ? (
        <Posts posts={filteredPosts} />
      ) : (
        <p className="message">
          No results for: <br /> "{searchValue}"
        </p>
      )}

      <div className="button-container">
        {!searchValue && (
          <>
            <Button disabled={page === 0} text="←" onClick={handlePreviousPage} />
            <Button disabled={noMorePages} text="→" onClick={handleNextPage} />
          </>
        )}
      </div>
    </section>
  );
};
