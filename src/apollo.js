import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      toggleLikeMovie: (_, { id, isLiked }, { cache }) => {
        cache.writeData({ id: `Movie:${id}`, data: { isLiked: !isLiked } });
      },
    },
  },
});

export default client;

//아폴로의 지리는 부분. Cache를 가지고 있음. 레게노.
