import { useEffect, useState } from 'react';
import GameList from './components/GameList';
import GameReviews from './components/GameReviews';
import GameOverview from './components/GameOverview';
import Main from './components/Main';
import Navbar from './components/Navbar';
import './index.css';

const App = () => {
  const [games, setGames] = useState([]);
  const [reviewed, setReviewed] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectGame = id => {
    setSelectedId(selectedId => (id === selectedId ? null : id));
  };

  const handleAddReviewed = game => {
    setReviewed(reviewed => [...reviewed, game]);
  };

  const handleDeleteReview = id => {
    setReviewed(reviewed => reviewed.filter(game => game.id !== id));
  };

  useEffect(() => {
    const controller = new AbortController();

    async function getGames() {
      try {
        setIsLoading(true);
        setError('');

        const res = await fetch(
          `https://api.rawg.io/api/games?key=0dded3278c844ab48fc5604e089ddc04&page_size=5&search=${query}`,
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
      } finally {
        setIsLoading(false);
      }
    }
    getGames();

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <div className='App'>
      <Navbar query={query} setQuery={setQuery} />

      {reviewed.length > 0 && (
        <GameReviews reviewed={reviewed} onSelectGame={handleSelectGame} />
      )}

      <Main>
        <GameList
          games={games}
          onSelectGame={handleSelectGame}
          isLoading={isLoading}
          error={error}
        ></GameList>

        <GameOverview
          selectedId={selectedId}
          onAddReview={handleAddReviewed}
          onDeleteReview={handleDeleteReview}
          reviewed={reviewed}
        />
      </Main>
    </div>
  );
};

export default App;
