const Navbar = ({ query, setQuery }) => {
  return (
    <div className='nav'>
      <h1>Video Game Reviews</h1>
      <input
        className='search'
        type='text'
        placeholder='Search video games..'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Navbar;
