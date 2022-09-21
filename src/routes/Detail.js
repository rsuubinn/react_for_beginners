import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      console.log(json.data.movie);
      setMovie(json.data.movie);
      setLoading(false);
    };
    getMovie();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.detail}>
          <img
            className={styles.detail__backgroundImg}
            src={movie.background_image}
            alt={movie.title}
          />
          <div className={styles.detail__components}>
            <img
              className={styles.detail__poster}
              src={movie.medium_cover_image}
              alt={movie.title}
            />
            <h1 className={styles.detail__title}>{movie.title}</h1>
            <span className={styles.detail__rating}>평점 {movie.rating}</span>
            {movie.runtime / 60 >= 1 ? (
              <span className={styles.detail__time}>
                {Math.floor(movie.runtime / 60)}시간 {movie.runtime % 60}분
              </span>
            ) : (
              <span className={styles.detail__time}>{movie.runtime}분</span>
            )}

            <span className={styles.detail__year}>{movie.year}</span>
            <ul className={styles.detail__genres}>
              {movie.genres.map((genre) => (
                <li key={movie.id}>{genre}</li>
              ))}
            </ul>
            <p className={styles.detail__description}>
              {movie.description_full}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
