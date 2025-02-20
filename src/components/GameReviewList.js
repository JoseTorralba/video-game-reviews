const GameReviewList = ({ reviewed, onSelectGame, isLoading }) => {
  return (
    <ul className='reviews-list'>
      {reviewed.map(review => (
        <li
          className='reviews-item'
          key={review.id}
          onClick={() => onSelectGame(review.id)}
        >
          <div
            className='reviews-image'
            style={{ backgroundImage: `url(${review.background_image})` }}
          ></div>
          <div className='reviews-info'>
            <p>{review.name}</p>
            <p>⭐️ {review.userRating} / 5</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GameReviewList;
