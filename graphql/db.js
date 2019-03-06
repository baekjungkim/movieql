export const people = [
  {
    id: "0",
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
  {
    id: "1",
    name: "Jisu",
    age: 18,
    gender: "female"
  },
  {
    id: "2",
    name: "Korean Guy",
    age: 18,
    gender: "male"
  },
  {
    id: "3",
    name: "Daal",
    age: 18,
    gender: "male"
  },
  {
    id: "4",
    name: "JD",
    age: 18,
    gender: "male"
  },
  {
    id: "5",
    name: "Moondaddi",
    age: 18,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
