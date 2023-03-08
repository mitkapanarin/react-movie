import React, {useContext} from "react";
import MovieComponent from "./MovieComponent";
import { nanoid } from "nanoid";
import MovieContext from "../Utils/MoviesProvider";

const Movies = () => {
  const movies = useContext(MovieContext)
  return movies.map((item) => <MovieComponent {...item} key={nanoid()} />);
};

export default Movies;
