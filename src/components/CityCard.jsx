import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const CityCard = ({ city }) => {
  const [town, setTown] = useState(null);
  const dispatch = useDispatch();
  const API_KEY = "1d0308598175f64523b3e3e941bf225f";

  const getCityForecast = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${
          city.coord.lat
        }&lon=${city.coord.lon}&cnt=${8}&appid=${API_KEY}`
      );
      if (response.ok) {
        let details = await response.json();
        setTown(details);
        console.log(details);
      } else {
        console.log("error happened with the request");
      }
    } catch (error) {
      console.log("generic error happened", error);
    }
  };

  useEffect(() => {
    getCityForecast();
  }, []);

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
    <Container className="my-2">
      <Row>
        <h2>Detail Forecast</h2>
        <Col xs={12} md={8} className="mx-auto">
          <Card className="mx-auto mt-3">
            <Card.Body className="bg-dark text-light">
              <Card.Title className="fs-2">
                {city.name},{city.sys.country}
              </Card.Title>
              <Card.Text>
                <div>
                  Conditions {city.weather[0].main}
                  <img
                    src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
                    alt="meteo icon"
                  />
                </div>{" "}
                <div>
                  Temp max {convertKelvinToCelsius(city.main.temp_max)}°C Temp |
                  min {convertKelvinToCelsius(city.main.temp_min)}°C
                </div>
                <div>
                  Wind speed {city.wind.speed} | Wind deg. {city.wind.deg}
                </div>
                <div>
                  Feels Temp. {convertKelvinToCelsius(city.main.feels_like)}°C
                </div>
                <div>Humidity {city.main.humidity}%</div>
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
      <h2 className="my-4">Forecast for next hours</h2>
      {town !== null &&
        town.list.map((day, i) => (
          <Row key={i}>
            <Col xs={10} md={6} className="mx-auto">
              <Card className="mx-auto mt-3">
                <Card.Body className="bg-dark text-light">
                  <Card.Title className="fs-2">{day.dt_txt}</Card.Title>
                  <Card.Text className="d-flex flex-column justify-content-between">
                    <div>
                      Conditions {day.weather[0].description}{" "}
                      <img
                        src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`}
                        alt="meteo icon"
                      />
                    </div>
                    <div>
                      Temp max {convertKelvinToCelsius(day.main.temp_max)}°C{" "}
                    </div>
                    <div>
                      Temp min {convertKelvinToCelsius(day.main.temp_min)}°C
                    </div>
                    <div>
                      Feels Temp. {convertKelvinToCelsius(day.main.feels_like)}
                      °C
                    </div>
                    <div>Humidity {day.main.humidity}%</div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
    </Container>
  );
};

export default CityCard;
