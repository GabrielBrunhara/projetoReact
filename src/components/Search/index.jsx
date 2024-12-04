import './styles.css';

export const Search = ({ placeholder, value, onChange, onFocus }) => {


  const handleFocus = (e) => {
    e.target.placeholder = onFocus;
  }

  const handleBlur = (e) => {
    e.target.placeholder = placeholder;
  }

  return (
    <input
      type="search"
      className='search'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};
