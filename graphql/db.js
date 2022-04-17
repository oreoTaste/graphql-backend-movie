import fetch from "cross-fetch";

let movieList = [];
async function sourceMovies() {
    if(movieList.length < 1) {
        const MOVIE_API = 'https://yts.mx/api/v2/list_movies.json?limit=5&minimum_rating=9&sort_by=year&order_by=desc';
        const response = await fetch(MOVIE_API);
        const {data: {movies}} = await response.json();
        movieList = movies;
    }
    return movieList;
}
export const findAll = async () => sourceMovies();
export const findById = async (id) => findAll().then(list => list.filter(movie => movie.id === id)?.shift());
export const deleteById = async (id) => {
    let movies = await findAll();
    let filtered = movies.filter(movie => movie.id !== id)
    if(filtered.length < movies.length) {
        movieList = filtered;
        return true
    } else {
        return false
    }
}
export const addMovie = async (title, rating) => {
    let movies = await findAll();
    let newMovie = {id: 1 + movies.reduce((pre_id, {id, title, rating}, ind, arr) => Math.max(pre_id, id), 0),
                    title,
                    rating};
    movieList.push(newMovie);
    return newMovie;
}