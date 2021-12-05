import axios from "axios";
import { API_KEY } from "./common/keys";

const BASE_URL_POPULAR = 'https://api.themoviedb.org/3/trending/movie/';
axios.defaults.baseURL = BASE_URL_POPULAR;


export async function fetchPopularMovies() {
    const response = await axios.get(`day?api_key=${API_KEY}`);
    return response.data;
 }

