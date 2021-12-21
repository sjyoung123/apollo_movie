import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
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
}

function Movie({ id, bg }: IMovie) {
  return (
    <>
      <Container>
        <Link to={`/${id}`}>
          <Poster bg={bg}></Poster>
        </Link>
      </Container>
    </>
  );
}
export default Movie;
