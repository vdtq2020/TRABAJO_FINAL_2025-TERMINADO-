const MOVIES_URL = "data/moviesdb.json";

function MovieCard({ movie }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden h-64">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          style={{ zIndex: 1 }}
        />
        <div
          className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          style={{ zIndex: 2 }}
        ></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          {movie.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
          {movie.description}
        </p>

        <div className="flex flex-wrap gap-2 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
              {movie.year}
            </span>
            <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs font-medium">
              {movie.genre}
            </span>
          </div>

          <div className="flex items-center bg-yellow-50 dark:bg-yellow-900 px-3 py-1 rounded-full">
            <span className="text-yellow-500 mr-1">⭐</span>
            <span className="text-yellow-700 dark:text-yellow-300 text-sm font-semibold">
              {movie.rating}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MovieGrid({ movies, onMovieClick }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {movies.map((movie, idx) => (
        <div
          key={idx}
          onClick={() => onMovieClick(movie.id)}
          className="cursor-pointer"
        >
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}

function App() {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    fetch(MOVIES_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  const handleMovieClick = (id) => {
    window.location.href = `detalle.html?id=${id}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto py-8">
        <MovieGrid movies={movies} onMovieClick={handleMovieClick} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("moviesgrid"));
