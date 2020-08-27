import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
});

export default client;

//아폴로의 지리는 부분. Cache를 가지고 있음. 레게노.
