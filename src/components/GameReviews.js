import { useState } from 'react';
import GameReviewList from './GameReviewList';

const GameReviews = ({ reviewed }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='reviews'>
      <div className='reviews-dropdown'>
        <h2>My Reviewed Games</h2>
        <button
          className='reviews-toggle'
          onClick={() => setIsOpen(open => !open)}
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>

      {isOpen && <GameReviewList reviewed={reviewed} />}
    </div>
  );
};

export default GameReviews;
