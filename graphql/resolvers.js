const baekjung = {
  name: "baekjung",
  age: "32",
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => baekjung
  }
};

export default resolvers;
