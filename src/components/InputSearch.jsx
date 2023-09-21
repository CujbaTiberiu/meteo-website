import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ListGroup, Dropdown, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const API_KEY = "1d0308598175f64523b3e3e941bf225f";

function convertKelvinToCelsius(kelvin) {
  const celsius = kelvin - 273.15;
  return Math.round(celsius * 100) / 100;
}

const InputSearch = function () {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  const DropSugg = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    await DropSugg();
  };

  const onSelectCity = async (cityName, country) => {
    setCity(`${cityName}, ${country}`);
    console.log(cityName);
    setSuggestions([]);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData([data]);
      setError(null);
      console.log(data);
    } catch (error) {
      console.error(error);
      setError("City not found");
      setWeatherData([]);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={8} className="my-5 mx-auto">
          <h1 className="my-3">Search a city</h1>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="mx-1"
              aria-label="Search"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Button
              variant="outline-success"
              type="submit"
              className="search__button"
            >
              Search
            </Button>
          </Form>
          {suggestions.length > 0 && (
            <Dropdown.Menu show>
              {suggestions.map((suggestion, i) => (
                <Dropdown.Item
                  key={i}
                  onClick={() =>
                    onSelectCity(suggestion.name, suggestion.country)
                  }
                >
                  {suggestion.name}, {suggestion.country}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          )}
          {error && <p>{error}</p>}
          {weatherData.length > 0 && (
            <ListGroup className=" bg-dark text-light my-3">
              {weatherData.map((data, i) => (
                <ListGroup.Item
                  className="my-5  bg-dark text-light"
                  key={data.id + i}
                >
                  <h2>{data.name}</h2>
                  <h3 className="fs-1 ">
                    {data.main && data.main.temp
                      ? Math.round(convertKelvinToCelsius(data.main.temp)) +
                        "°C"
                      : "N/A"}
                  </h3>
                  <p>
                    Description:{" "}
                    {data.weather &&
                    data.weather[0] &&
                    data.weather[0].description ? (
                      <div>
                        <img
                          src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                          alt="meteo icon"
                        />
                        <span>{data.weather[0].description}</span>
                      </div>
                    ) : (
                      "N/A"
                    )}
                  </p>
                  <Link to={"/city/" + data.id}>
                    {console.log(data.id)}
                    <Button className="bg-dark text-info px-4 border border-2 border-primary details__button">
                      Show Details
                    </Button>
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default InputSearch;
