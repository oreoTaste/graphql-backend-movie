import { movies, getById, addMovie, deleteMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, { id }) => {
      return getById(id);
    },
  },
  Mutation: {
    addMovie: (_, { name, score }) => {
      return addMovie(name, score);
    },
    deleteMovie: (_, { id }) => {
      return deleteMovie(id);
    },
  },
};

export default resolvers;
