import './styles.css';

export const Search = ({placeholder, value, onChange}) => (

    <input
          type="search"
          className='search'
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
);
