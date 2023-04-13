const KEY = '4b74f2ea3b08888265ff7e6458d6d56f'
const BASE_URL= 'https://api.themoviedb.org/3'
const BASE_CONFIG = '&language=en-US$page=1'

const requests = {
    requestPopular: `${BASE_URL}/movie/popular?api_key=${KEY}${BASE_CONFIG}`,
    requestTopRated: `${BASE_URL}/movie/top_rated?api_key=${KEY}${BASE_CONFIG}`,
    requestNowPlaying: `${BASE_URL}/movie/now_playing?api_key=${KEY}${BASE_CONFIG}`,
    requestUpcoming: `${BASE_URL}/movie/popular?api_key=${KEY}${BASE_CONFIG}`,
    requestHorror: `${BASE_URL}/search/movie?api_key=${KEY}${BASE_CONFIG}&include_adult=true`
}

export default requests