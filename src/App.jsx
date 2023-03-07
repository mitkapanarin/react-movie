import { useState } from "react";
import "./App.css";
import { data } from "./data";
import MovieComponent from "./components/MovieComponent";
import MoviesProvider from "./Utils/MoviesProvider";
import { nanoid } from "nanoid";

function App() {
  const [movies, setMovies] = useState(data);
  return (
    <div className="App">
      {movies.map((item) => (
        <MovieComponent {...item} key={nanoid()} />
      ))}
    </div>
  );
}

export default App;
