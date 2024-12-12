import P from 'prop-types';
import './styles.css';

export const Search = ({ placeholder, value, onChange, onFocus }) => {
  const handleFocus = (e) => {
    e.target.placeholder = onFocus;
  };

  const handleBlur = (e) => {
    e.target.placeholder = placeholder;
  };

  return (
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

Search.propTypes = {
  placeholder: P.string.isRequired,
  value: P.string.isRequired,
  onChange: P.func.isRequired,
  onFocus: P.string.isRequired,
};
