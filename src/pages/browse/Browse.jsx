import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/BrowsePage/Banner/Banner";
import requests from "../../store/Request";
import MovieList from "../../components/BrowsePage/MovieList/MovieList";

const API_URL = `https://api.themoviedb.org/3`;

const MOVIELIST_CONTENT = (
  <React.Fragment>
    <MovieList
      requestType={API_URL + requests.fetchNetflixOriginals}
      requestName=""
    />
    <MovieList
      requestType={API_URL + requests.fetchTrending}
      requestName="Xu hướng"
    />
    <MovieList
      requestType={API_URL + requests.fetchTopRated}
      requestName="Xếp hạng cao"
    />
    <MovieList
      requestType={API_URL + requests.fetchActionMovies}
      requestName="Hành động"
    />
    <MovieList
      requestType={API_URL + requests.fetchComedyMovies}
      requestName="Hài"
    />
    <MovieList
      requestType={API_URL + requests.fetchHorrorMovies}
      requestName="Kinh dị"
    />
    <MovieList
      requestType={API_URL + requests.fetchRomanceMovies}
      requestName="Lãng mạn"
    />
    <MovieList
      requestType={API_URL + requests.fetchDocumentaries}
      requestName="Tài liệu"
    />
  </React.Fragment>
);

function Browse() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      {MOVIELIST_CONTENT}
    </div>
  );
}

export default Browse;
