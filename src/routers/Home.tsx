import { useQuery, gql } from "@apollo/client";

const GET_MOVIE = gql`
  {
    movies {
      id
      medium_cover_image
    }
  }
`;

export function Home() {
  const { loading, data, error } = useQuery(GET_MOVIE);
  console.log(data);
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
