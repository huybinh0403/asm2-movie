import { useState, useEffect } from "react";

import MovieDetail from "../MovieDetail/MovieDetail";

import "./MovieList.css";

const IMG_URL = `https://image.tmdb.org/t/p/original`;

const MovieList = (props) => {
  //State quản lý trạng thái dữ liệu phim được trả về 
  const [movies, setMovies] = useState([]);

  //State quản lý thông tin phim được click
  const [movieData, setMovieData] = useState({});

  //State quản lý việc ẩn hiện thông tin của phim được click
  const [showMovieDetail, setShowMovieDetail] = useState(false);

  //State quản lý id phim được click 
  const [clickedMoiveId, setClickedMovieId] = useState(null);

  //Sử dụng useEffect để hàm fetchMoivedData chạy lại mỗi khi requestType thay đổi
  useEffect(() => {
    const fetchMoivedData = async () => {
      try {
        const response = await fetch(props.requestType);
        // console.log(response);
        // Nếu status của response not ok (false)
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        // console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMoivedData();
  }, [props.requestType]);

  return (
    <div className="movieList">
      <h2 className="movieList_title">{props.requestName}</h2>
      <div className="movieList_images scrollbar">
        {movies.map((movie) => (
          <img
            key={movie.id}
            //phim thuộc danh mục Original (requestName="") sẽ được hiển thị dưới dạng Poster
            src={
              props.requestName === ""
                ? IMG_URL + movie.poster_path
                : IMG_URL + movie.backdrop_path
            }
            className={`movieList_image ${
              props.requestName === "" && "movieList_imagePoster"
            }`}
            alt={movie.name}
            onClick={() => {
              setMovieData({
                movie_id: movie.id,
                movie_name: movie.name || movie.title,
                movie_image: movie.backdrop_path,
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
        ))}
      </div>
      {/*Ẩn hiện thông tin phim được click */}
      {showMovieDetail && <MovieDetail movieData={movieData} />}
    </div>
  );
};

export default MovieList;
