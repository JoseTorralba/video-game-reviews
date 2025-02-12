import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import GameReviews from './components/GameReviews';
import GameList from './components/GameList';
import GameOverview from './components/GameOverview';
import './index.css';

function App() {
  const [games, setGames] = useState([]);
  const [reviewed, setReviewed] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const KEY = 'a1fef96712d845f4a4186f1ee3e7033a';

  const handleSelectGame = id => {
    setSelectedId(selectedId => (id === selectedId ? null : id));
  };

  const handleAddReviewed = game => {
    setReviewed(reviewed => [...reviewed, game]);
  };

  function handleDeleteReview(id) {
    setReviewed(reviewed => reviewed.filter(game => game.id !== id));
  }

  useEffect(() => {
    const controller = new AbortController();

    async function getGames() {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${KEY}&page_size=5&search=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error('Something went wrong with fetching movies');

        const data = await res.json();
        if (data.Response === 'False') throw new Error('Game not found');

        setGames(data.results);
        setError('');
      } catch (err) {
        setError(err.message);
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      }
    }
    getGames();

    return function () {
      controller.abort();
    };
  }, [query]);

  return (
    <div className='App'>
      <Navbar query={query} setQuery={setQuery} />

      <GameReviews reviewed={reviewed} />
      <Main>
        <GameList games={games} onSelectGame={handleSelectGame} />
        <GameOverview
          selectedId={selectedId}
          onAddReview={handleAddReviewed}
          onDeleteReview={handleDeleteReview}
          reviewed={reviewed}
        />
      </Main>
    </div>
  );
}

export default App;
