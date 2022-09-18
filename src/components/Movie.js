function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <h3>{title}</h3>
      <p>{summary}</p>
      <ul>
        {genres ? genres.map((genre) => <li key={genre}>{genre}</li>) : null}
      </ul>
    </div>
  );
}

export default Movie;
