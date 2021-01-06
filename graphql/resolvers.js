import { movies, getById } from "./db";

const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, { id }) => {
      return getById(id);
    },
  },
};

export default resolvers;
