import { Link } from "react-router-dom";

interface IMovie {
  id: number;
  key: number;
}

function Movie({ id }: IMovie) {
  return (
    <>
      <Link to={`/${id}`}>
        <div>{id}</div>
      </Link>
    </>
  );
}
export default Movie;
