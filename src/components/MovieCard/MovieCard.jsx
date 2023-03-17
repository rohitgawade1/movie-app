import "../MovieCard/MovieCard.css";


export const MovieCard = ({movie}) => {
    const {name, imdb_rating, duration, genre, img_link} = movie
    // console.log(movie)
  return (
    <div className="card_container">
      <div className="card-img-container">
        <img
          className="card-img"
          src={img_link}
          alt="card-img"
        />
      </div>
      <div className="card-details">
        <h4 className="title">{name}</h4>
        <span className="genre">Genre: {genre}</span>
        <div className="rating">
            <span>Rating: {imdb_rating}</span>
            <span>{duration} mins</span>
        </div>
      </div>
    </div>
  );
};
