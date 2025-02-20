import { useState } from 'react';
import GameReviewList from './GameReviewList';

const GameReviews = ({ reviewed, onSelectGame }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='reviews'>
      <div className='reviews-dropdown'>
        <h2>My Reviewed Games</h2>
        <h2>Total Games: {reviewed.length}</h2>
        <button
          className='reviews-toggle'
          onClick={() => setIsOpen(open => !open)}
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>

      {isOpen && (
        <GameReviewList reviewed={reviewed} onSelectGame={onSelectGame} />
      )}
    </div>
  );
};

export default GameReviews;
