import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "../context";

const SingleMovie = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(true);
  const [movie, setMovie] = useState("");
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setIsLoaded(false);
        setMovie(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 800);

    return () => clearTimeout(timerOut);
  }, [id]);
  if (isLoaded) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }
  return (
    <>
      <section className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt="" />
          </figure>
        </div>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}/10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back!
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default SingleMovie;
