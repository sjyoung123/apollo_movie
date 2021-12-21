import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Loading } from "./Home";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;

  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
`;

interface IPoster {
  bg?: string;
}

const Poster = styled.div<IPoster>`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

interface IDetail {
  movie: {
    __typename: string;
    description_intro: string;
    language: string;
    rating: number;
    medium_cover_image: string;
    title: string;
  };
}

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      language
      rating
      title
      medium_cover_image
      description_intro
    }
  }
`;

function Detail() {
  const { id } = useParams();
  const { loading, data } = useQuery<IDetail>(GET_MOVIE, {
    variables: { id: id && +id },
  });

  return (
    <>
      <Container>
        <Column>
          <Title>
            {loading ? <Loading>Loading...</Loading> : data?.movie.title}
          </Title>
          {!loading && (
            <>
              <Title>{data?.movie.title}</Title>
              <Subtitle>
                {data?.movie.language} {`${data?.movie.rating}/10`}
              </Subtitle>
              <Description>{data?.movie.description_intro} </Description>
            </>
          )}
        </Column>
        <Poster bg={data?.movie.medium_cover_image}></Poster>
      </Container>
    </>
  );
}
export default Detail;
