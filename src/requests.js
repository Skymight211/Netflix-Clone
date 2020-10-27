const API_KEY = "32f536cbf74bdd90fc9197bb7ce491a6";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOrigionals: `/discover/tv?api_key=${API_KEY}&with_networks=21`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-U`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_ganres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_ganres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_ganres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_ganres=1074`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_ganres=99`,
};

export default requests;
