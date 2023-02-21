const key = "63068768c76833b0b434e24b7f444698";

export function searchValue(e) {
  return e.target.value;
}

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
};

export default requests;
