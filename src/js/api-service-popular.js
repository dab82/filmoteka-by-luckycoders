import axios from "axios";
import { API_KEY } from "./common/keys";

const BASE_URL = 'https://api.themoviedb.org'
// const key = '8467b35301383f6844ef88f323a204bb';

export async function fetchMovies() {
    const url = `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`;
    return await axios.get(url);

 }
