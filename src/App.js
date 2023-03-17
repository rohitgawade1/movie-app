import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { MovieCard } from "./components/MovieCard/MovieCard";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const [movies, setMovies] = useState([]);
  const [constData, setConstdata] = useState([])
  const getMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://movies-app.prakashsakari.repl.co/api/movies"
      );
      setMovies(data);
      setConstdata(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div>
        <Navbar movies={movies} setMovies={setMovies} constData={constData}/>
      </div>
      <div className="App">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
}

export default App;
