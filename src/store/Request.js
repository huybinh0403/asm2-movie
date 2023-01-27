const API_KEY = "029ce91b9aadfadfb5ebe806a6da3d10";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  //vì end point của API lấy dữ liệu trailer là /movie
  // (https://api.themoviedb.org/3//movie/{movie_id}/videos?api_key=<api_key>)
  //nên em đổi end point của fetchNetflixOriginals từ tv => movie để tránh lỗi
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;
