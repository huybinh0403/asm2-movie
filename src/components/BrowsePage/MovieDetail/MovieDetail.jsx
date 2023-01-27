import React, { useState, useEffect, useCallback } from "react";

import YouTube from "react-youtube";

import "./MovieDetail.css";

const API_KEY = "029ce91b9aadfadfb5ebe806a6da3d10";

const opts = {
  height: "400",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

const MovieDetail = (props) => {
  const {
    movie_id,
    movie_name,
    movie_image,
    vote_average,
    release_date,
    overview,
  } = props.movieData;
  // console.log(props.movieData);

  //State quản lý dữ liệu trailer được trả về
  const [movieTrailer, setMovieTrailer] = useState([]);

  const fetchUrl = `https://api.themoviedb.org/3//movie/${movie_id}/videos?api_key=${API_KEY}`;
  const movieImageUrl = "https://image.tmdb.org/t/p/original" + movie_image;

  //Hàm lấy dữ liệu từ API
  const fetchMovieTrailer = useCallback(async () => {
    try {
      const response = await fetch(fetchUrl);
      // console.log(response);
      // Nếu status của response not ok (false)
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      // console.log(data.results);
      setMovieTrailer(data.results);
    } catch (error) {
      console.log(error.message);
    }
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieTrailer();
  }, [fetchMovieTrailer]);

  // console.log(movieTrailer);

  //Kiểm tra dữ liệu trả về đảm bảo type và site
  let dettailTrailer;
  movieTrailer.forEach((trailer) => {
    if (
      trailer.site === "YouTube" &&
      (trailer.type === "Trailer" || trailer.type === "Teaser")
    ) {
      dettailTrailer = (
        <YouTube
          className="movieDetail_trailer"
          videoId={trailer.key}
          opts={opts}
        />
      );
    } else {
      dettailTrailer = (
        <img
          src={movieImageUrl}
          alt={movie_name}
          className="movieDetail_image"
        ></img>
      );
    }
  });

  return (
    <div className="movieDetail">
      <div className="movieDetail_text">
        <h1>{movie_name}</h1>
        <hr></hr>
        <h2>Release Date: {release_date}</h2>
        <h2>Vote: {vote_average} / 10</h2>
        <p>{overview}</p>
      </div>
      <div>{dettailTrailer}</div>
    </div>
  );
};

export default MovieDetail;
