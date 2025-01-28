import { useState } from 'react';

const Navbar = ({ query, setQuery }) => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className='nav'>
      <h1>Video Game Reviews</h1>
      <input
        className='search'
        type='text'
        placeholder='Seach video games..'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Navbar;
