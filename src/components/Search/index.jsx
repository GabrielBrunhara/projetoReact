import P from 'prop-types';
import './styles.css';

export const Search = ({ placeholder = 'Search', value, onChange, onFocus = 'Type something...' }) => {
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
  placeholder: P.string,
  onFocus: P.string,
  value: P.string.isRequired,
  onChange: P.func.isRequired,
};
