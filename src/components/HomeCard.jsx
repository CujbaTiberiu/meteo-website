import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

function convertKelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return Math.round(celsius * 100) / 100;
}

const HomeCard = ({ city }) => {
  const [cardCity, setCardCity] = useState(null);
  const cityInfo = async () => {
    const API_KEY = "1d0308598175f64523b3e3e941bf225f";

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      const data = await response.json();
      setCardCity(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cityInfo();
  }, []);

  return (
    cardCity !== null && (
      <Card className="mx-auto mt-3 bg-dark text-light home__card">
        <Card.Body>
          <Card.Title className="fs-2">
            {cardCity.name},{cardCity.sys.country}
          </Card.Title>
          <Card.Text>
            <div>
              Conditions {cardCity.weather[0].main}
              <img
                src={`http://openweathermap.org/img/w/${cardCity.weather[0].icon}.png`}
                alt="meteo icon"
              />
            </div>{" "}
            <div>
              Temp max {convertKelvinToCelsius(cardCity.main.temp_max)}
              °C Temp | min {convertKelvinToCelsius(cardCity.main.temp_min)}
              °C
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  );
};

export default HomeCard;
