export let movies = [
  {
    id: 1,
    name: "happiness",
    score: 8,
  },
  {
    id: 2,
    name: "darkside",
    score: 10,
  },
  {
    id: 3,
    name: "wonder woman",
    score: 6,
  },
  {
    id: 4,
    name: "batman",
    score: 4,
  },
  {
    id: 5,
    name: "superman",
    score: 8,
  },
];

export const getById = (id) => {
  return movies.find((movie) => movie.id === id);
};

export const addMovie = (name, score) => {
  movies.sort((a, b) => a.id - b.id);

  const newMovie = {
    id: movies[movies.length - 1].id + 1,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((el) => el.id !== id);
  if (cleanedMovies.length < movies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
