import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Favourites = () => {
  const favContainer = useSelector((state) => state.favs.content);
  console.log(favContainer);
  const dispatch = useDispatch();
  const removeFav = (i) => {
    dispatch({
      type: "REMOVE_FAV",
      payload: i,
    });
  };
  return (
    <Container>
      <Row>
        <Col xs={12} md={8} className="mx-auto text-center">
          <h2 className="my-4">Your saved locations</h2>
          {favContainer.length > 0 ? (
            <ListGroup variant="flush">
              {favContainer.map((fav, i) => (
                <ListGroup.Item
                  className="d-flex justify-content-between"
                  key={i}
                >
                  <p>
                    <span className="fw-bold">Name</span> -{" "}
                    <a href={fav.url} alt="company website">
                      {fav.name}
                    </a>{" "}
                  </p>
                  <Button variant="outline-danger" onClick={() => removeFav(i)}>
                    Remove
                  </Button>{" "}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <h2>No cities added to favourites</h2>
          )}

          <Link to="/">
            <Badge className="fs-4" bg="secondary">
              Go Back
            </Badge>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
