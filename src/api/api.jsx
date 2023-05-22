const API_KEY = "aa24613b743096ec39ae11d5001cf55a";

const api = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  // fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`
};
export default api;
