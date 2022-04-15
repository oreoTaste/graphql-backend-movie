const Mike = {
    name: "Mike",
    age: 14
}
const Julia = {
    name: "Julia",
    age: 22
}

const people = [
    Mike,
    Julia,
    {
        name: "noname",
        age: 25
    }
]

const resolvers = {
    Query: {
        person: () => ({
            name: "Julia",
            age: 22
        }),
        people: () => [Mike,Julia,]
    }
}
export default resolvers;