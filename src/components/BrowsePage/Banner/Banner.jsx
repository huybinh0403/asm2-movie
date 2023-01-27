import React, { useState, useEffect } from "react";

import requests from "../../../store/Request";

import "./Banner.css";

const Banner = () => {
  //State quản lý dữ liệu movie trả về từ API
  const [movieData, setMovieData] = useState({});

  // Hàm lấy dữ liệu phim
  const fethchMovieData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3` + requests.fetchNetflixOriginals
    );

    const data = await response.json();
    // console.log(data);
    const randomMovie =
      data.results[Math.floor(Math.random() * data.results.length - 1)]; // Lấy ngẫu nhiên 1 phim
    // console.log(randomMovie);
    // Lưu dữ liệu phim được trả về
    setMovieData({
      id: randomMovie.id || randomMovie.genre_ids,
      name: randomMovie.title || randomMovie.name,
      image: "https://image.tmdb.org/t/p/original" + randomMovie.backdrop_path,
      description: randomMovie.overview || "This movie has no description",
    });
  };

  // sử dụng useEffect để fetchMovieData chỉ được gọi khi load trang
  useEffect(() => {
    fethchMovieData();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(
          rgba(34, 34, 34, 0.2),
          rgba(34, 34, 34, 0.2)
        ), url('${movieData.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "50% 20%",
        height: "70vh",
      }}
    >
      <div className="banner_container">
        <h1 className="banner_title">{movieData.name}</h1>
        <div>
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <p className="banner_description">{movieData.description}</p>
      </div>
    </div>
  );
};

export default Banner;
