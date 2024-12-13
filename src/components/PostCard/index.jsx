import P from 'prop-types';
import './styles.css';

export const PostCard = ({ title, body, cover, id }) => (
  <div className="post-card">
    <img src={cover} alt={title} />
    <div className="post-card-content">
      <h2> {title} </h2>
      <br />
      <h3>Id: {id} </h3>
      <br />
      <p> {body} </p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: P.string.isRequired,
  body: P.string.isRequired,
  cover: P.string.isRequired,
  id: P.number.isRequired,
};
