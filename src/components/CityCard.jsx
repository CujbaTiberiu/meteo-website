import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";

const CityCard = ({ city }) => {
  const dispatch = useDispatch();

  const addToFav = () => {
    dispatch({
      type: "ADD_FAV",
      payload: city.name,
    });
  };

  if (!city) {
    return null;
  }

  function convertKelvinToCelsius(kelvin) {
    const celsius = kelvin - 273.15;
    return Math.round(celsius * 100) / 100;
  }

  return (
    <Container className="my-5">
      <Row>
        <h2>Detail Forecast</h2>
        <Col xs={12} md={8} className="mx-auto">
          <Card className="mx-auto mt-3">
            <Card.Body>
              <Card.Title className="fs-2">{city.name}</Card.Title>
              <Card.Text>
                <div>Conditions {city.weather[0].main}</div>{" "}
                <div>
                  Temp max {convertKelvinToCelsius(city.main.temp_max)} Temp min{" "}
                  {convertKelvinToCelsius(city.main.temp_min)}
                </div>
              </Card.Text>
              <Button
                className=""
                variant="outline-success"
                onClick={() => addToFav()}
              >
                Add
              </Button>{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CityCard;
