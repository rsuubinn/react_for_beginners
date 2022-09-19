import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      console.log(json.data.movie);
      setMovie(json.data.movie);
    };
    getMovie();
  }, [id]);

  return (
    <div>
      <img src={movie.background_image} alt={movie.title} />
      <img src={movie.small_cover_image} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.description_full}</p>
      <span>{movie.rating}</span>
      <span>{movie.year}</span>
    </div>
  );
}

export default Detail;
