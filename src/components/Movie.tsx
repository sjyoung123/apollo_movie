import { gql, useMutation } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LIKE_MOVIE = gql`
  mutation likeMovie($id: Int!) {
    likeMovie(id: $id) @client
  }
`;

const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  border-radius: 7px;
`;

interface IBg {
  bg: string;
}

const Poster = styled.div<IBg>`
  background-image: url(${(props) => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

interface IMovie {
  id: number;
  key: number;
  bg: string;
  isLiked: boolean;
}

function Movie({ id, bg, isLiked }: IMovie) {
  const [likeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: id },
  });

  const onClick = () => {
    likeMovie();
  };

  return (
    <>
      <Container>
        <Link to={`/${id}`}>
          <Poster bg={bg}></Poster>
        </Link>
        <button onClick={onClick}>{isLiked ? "Unliked" : "Like"}</button>
      </Container>
    </>
  );
}
export default Movie;
