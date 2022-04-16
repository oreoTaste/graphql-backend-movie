let movies = [
    {
        id: 1,
        name: "Matrix",
        score: 100
    },
    {
        id: 2,
        name: "The way out",
        score: 88
    },
    {
        id: 3,
        name: "Fantastic Beast",
        score: 90
    },
    {
        id: 4,
        name: "Sonic the Hedgehog 2",
        score: 93
    },
    {
        id: 5,
        name: "Ambulance",
        score: 97
    },
    {
        id: 6,
        name: "The Lost City",
        score: 95        
    }
]

export const findById = (id) => movies.filter(movie => movie.id === id)?.shift();
export const findAll = () => movies;
export const deleteById = (id) => {
    let filtered = movies.filter(movie => movie.id !== id)
    if(filtered.length < findAll().length) {
        movies = filtered;
        return true
    } else {
        return false
    }
}
export const addMovie = (name, score) => {
    let newMovie = {id: 1 + findAll().reduce((pre_id, {id, name, score}, ind, arr) => Math.max(pre_id, id), 0),
                    name,
                    score};
    movies.push(newMovie);
    return newMovie;
}