const GameReviewList = ({ reviewed }) => {
  return (
    <ul className='reviews-list'>
      {reviewed.map(review => (
        <li className='reviews-item' key={review.id}>
          <img
            className='reviews-poster'
            src={review.background_image}
            alt={review.name}
          />
          <div className='reviews-info'>
            <p>{review.name}</p>
            <p>⭐️ {review.userRating}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GameReviewList;
