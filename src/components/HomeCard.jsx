import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import React from "react";

function HomeCard({ city }) {
  const [forecast, setForecast] = useState([]);
  const [nextForecast, setNextForecast] = useState([]);
  const API_KEY = "1d0308598175f64523b3e3e941bf225f";
  console.log(city);
  const getCityForecast = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city[0].name}&appid=${API_KEY}`
      );
      if (response.ok) {
        let details = await response.json();
        const now = new Date();
        const firstDayForecast = details.list.filter((item) => {
          const itemDate = new Date(item.dt * 1000);
          const hoursDiff = (itemDate - now) / 1000 / 60 / 60;
          return hoursDiff >= 0 && hoursDiff <= 24;
        });
        setForecast(firstDayForecast);

        const nextDaysForecast = details.list.filter((item) => {
          const itemDate = new Date(item.dt * 1000);
          const hoursDiff = (itemDate - now) / 1000 / 60 / 60;
          return hoursDiff > 24 && hoursDiff <= 24 * 5;
        });
        setNextForecast(nextDaysForecast);
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

  return (
    <Container>
      <Row>
        <Col>
          <Card className="mx-auto mt-3">
            <Card.Body>
              <Card.Title>{city.name}</Card.Title>
              <Card.Text>{forecast[0]?.weather[0]?.description}</Card.Text>
              <Row>
                {forecast.map((item, index) => (
                  <Col key={index}>
                    <div>{new Date(city.dt * 1000).toLocaleTimeString()}</div>
                    <div>{city.main.temp}°C</div>
                  </Col>
                ))}
              </Row>
              <Row>
                {nextForecast.map((city, index) => (
                  <Col key={index}>
                    <div>{new Date(city.dt * 1000).toLocaleDateString()}</div>
                    <div>{city.main.temp}°C</div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeCard;
