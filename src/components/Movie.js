import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres, id }) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h3>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h3>
      <p>{summary}</p>
      <ul>
        {genres ? genres.map((genre) => <li key={genre}>{genre}</li>) : null}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
