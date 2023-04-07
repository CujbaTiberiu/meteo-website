import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CityCard = ({ city }) => {
  if (!city) {
    return null;
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card className="mx-auto mt-3">
            <Card.Body>
              <Card.Title>{city.name}</Card.Title>
              <Card.Text>Conditions {city.weather[0].main}</Card.Text>
              <Link to="/" className="nav-link">
                <Button className="bg-white text-primary px-4 border border-2 border-primary">
                  Go Back
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CityCard;
