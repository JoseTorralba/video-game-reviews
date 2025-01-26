import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import GameReviews from './components/GameReviews';
import GameList from './components/GameList';
import GameOverview from './components/GameOverview';
import './index.css';

const tempGameData = [
  {
    id: 'tt1375661',
    Title: 'Silent Hill 2',
    Year: '2024',
    Poster: 'https://m.media-amazon.com/images/I/71E3B-85r1L._SY679_.jpg',
  },
  {
    id: 'tt0133092',
    Title: 'Metaphor: ReFantazio',
    Year: '2024',
    Poster: 'https://m.media-amazon.com/images/I/81pm4E9MfSL._SX522_.jpg',
  },
  {
    id: 'tt6751663',
    Title: 'Resident Evil 4',
    Year: '2023',
    Poster: 'https://m.media-amazon.com/images/I/712XPl7+qKL._SX522_.jpg',
  },
  {
    id: 'tt1375664',
    Title: 'Call of Duty: Black Ops 6',
    Year: '2024',
    Poster: 'https://m.media-amazon.com/images/I/81J6y4tm-WL._SX522_.jpg',
  },
  {
    id: 'tt0133095',
    Title: 'Monster Hunter Wilds',
    Year: '2025',
    Poster: 'https://m.media-amazon.com/images/I/81R23PTBdeL._SX522_.jpg',
  },
  {
    id: 'tt6751666',
    Title: 'Final Fantasy XVI',
    Year: '2023',
    Poster: 'https://m.media-amazon.com/images/I/81CixOru0zL._SX522_.jpg',
  },
  {
    id: 'tt1375667',
    Title: 'Elden Ring',
    Year: '2022',
    Poster:
      'https://m.media-amazon.com/images/I/81mtrRvlFqL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
  },
  {
    id: 'tt0133098',
    Title: 'Octopath Traveler 2',
    Year: '2024',
    Poster:
      'https://m.media-amazon.com/images/I/91P+GonSxCL._AC_SY300_SX300_DpWeblab_.jpg',
  },
  {
    id: 'tt6751669',
    Title: 'Dragon Quest III',
    Year: '2024',
    Poster:
      'https://m.media-amazon.com/images/I/51-EiJcOxvL._SY430_SX215_QL70_FMwebp_.jpg',
  },
  {
    id: 'tt6751661',
    Title: 'The Witcher 3: Wild Hunt',
    Year: '2015',
    Poster: 'https://m.media-amazon.com/images/I/81BHn3JO3ML._SX522_.jpg',
  },
];

const tempPlayedGameData = [
  {
    id: 'tt1375666',
    Title: 'Silent Hill 2',
    Year: '2024',
    Poster: 'https://m.media-amazon.com/images/I/71E3B-85r1L._SY679_.jpg',
    Summary:
      'In your restless dreams, do you see that town? SILENT HILL 2 is coming exclusively to PlayStation 5. Produced by KONAMI and developed by Bloober Team in collaboration with Akira Yamaoka and Masahiro Ito, the unsettling town shrouded in the brooding fog will be remade with enhanced visuals, sounds and gameplay. The SILENT HILL 2 remake revisits main protagonist James Sunderland and his search for clues in the namesake town, after receiving a mysterious letter from his wife Mary… who has long been dead.',
  },
];

function App() {
  const [games, setGames] = useState(tempGameData);
  const [gameOverview, setGameOverview] = useState(tempPlayedGameData);

  // const KEY = 'a1fef96712d845f4a4186f1ee3e7033a';

  useEffect(() => {}, []);

  return (
    <div className='App'>
      <Navbar />

      <GameReviews reviewed={games} />
      <Main>
        <GameList games={games} />
        <GameOverview gameOverview={gameOverview} />
      </Main>
    </div>
  );
}

export default App;
