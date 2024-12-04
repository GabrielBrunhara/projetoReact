import { PostCard } from "../PostCard";
import './styles.css';

export const Posts = ({ posts }) => (
  <div className={`posts ${posts.length === 1 ? 'single-post' : ''}`}>
    {posts.map(post => (
      <PostCard
        key={post.id}
        id={post.id}
        title={post.title}
        body={post.body}
        cover={post.cover}
      />
    ))}
  </div>
);

