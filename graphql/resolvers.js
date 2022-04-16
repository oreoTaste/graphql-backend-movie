import {findAll, findById, deleteById, addMovie} from "./db";

const resolvers = {
    Query: {
        movies: () => findAll(),
        movie: (_, {id}) => findById(id),
    },
    Mutation: {
        deleteOne: (_, {id}) => deleteById(id),
        addMovie: (_, {name, score}) => addMovie(name, score)
    }
}

export default resolvers;