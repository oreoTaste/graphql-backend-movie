export const movies = [
  {
    id: "1",
    name: "happiness",
    score: 8,
  },
  {
    id: "2",
    name: "darkside",
    score: 10,
  },
  {
    id: "3",
    name: "wonder woman",
    score: 6,
  },
  {
    id: "4",
    name: "batman",
    score: 4,
  },
  {
    id: "5",
    name: "superman",
    score: 8,
  },
];

export const getById = (id) => {
  return movies.find((movie) => movie.id === String(id));
};
