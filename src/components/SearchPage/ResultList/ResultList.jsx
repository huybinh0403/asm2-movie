import React, { useState, useEffect } from "react";

import requests from "../../../store/Request";
import MovieDetail from "../../BrowsePage/MovieDetail/MovieDetail";

import "./ResultList.css";

const API_URL = `https://api.themoviedb.org/3`;
const IMG_URL = `https://image.tmdb.org/t/p/original`;

const ResultList = ({ query }) => {
  //State quản lý dữ liệu phim được trả về
  const [moviesResult, setMoviesRersult] = useState([]);
  // console.log(query);

  //State quản lý thông tin phim được click
  const [movieData, setMovieData] = useState({});

  //State quản lý việc ẩn hiện thông tin của phim được click
  const [showMovieDetail, setShowMovieDetail] = useState(false);

  //State quản lý id phim được click
  const [clickedMoiveId, setClickedMovieId] = useState(null);

  const fetchUrl = `${API_URL + requests.fetchSearch}&query=${query}`;

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await fetch(fetchUrl);
        // console.log(response);
        // Nếu status của response not ok (false)
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        setMoviesRersult(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    //Hàm searchMovies() chỉ chạy khi có từ khóa (query) được nhập
    if (query) {
      searchMovies();
    } else {
      setMoviesRersult([]);
    }
  }, [fetchUrl, query]);
  return (
    <div className="resultList">
      <div className="resultList_container">
        <h2 className="resultList_title"> Search Result</h2>
        <div className="resultList_detail">
          {/*Ẩn hiện thông tin phim được click */}
          {showMovieDetail && <MovieDetail movieData={movieData} />}
        </div>
        <div className="resultList_posters">
          {moviesResult.map((movie) => {
            return (
              <img
                key={movie.id}
                src={IMG_URL + movie.poster_path || movie.backdrop_path}
                alt={movie.name}
                className="resultList_poster"
                onClick={() => {
                  setMovieData({
                    movie_id: movie.id,
                    movie_name: movie.name || movie.title,
                    movie_image: movie.backdrop_path || movie.poster_path,
                    vote_average: movie.vote_average,
                    release_date: movie.first_air_date || movie.release_date,
                    overview: movie.overview || "This moive has no overview",
                  });

                  // So sánh id của phim trước và sau khi click
                  if (clickedMoiveId === movie.id) {
                    setShowMovieDetail(!showMovieDetail); // ẩn hiện thông tin phim được click
                  } else {
                    setShowMovieDetail(true);
                  }
                  setClickedMovieId(movie.id); // Lưu id của phim được click
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultList;
