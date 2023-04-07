import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";

function HomeCard() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="mx-auto mt-3">
            <Card.Body>
              <Card.Title>City Title</Card.Title>
              <Card.Text> Gradi Centigradi </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeCard;
