import { Container, Button } from "react-bootstrap";
import CityCard from "./CityCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/citypage.css";

function CityPage() {
  const API_KEY = "1d0308598175f64523b3e3e941bf225f";
  const params = useParams();
  console.log(params);
  const [city, setCity] = useState(null);

  const getCityDetails = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?id=${params.id}&appid=${API_KEY}`
      );
      if (response.ok) {
        let details = await response.json();
        setCity(details);
        console.log(details);
      } else {
        console.log("error happened with the request");
      }
    } catch (error) {
      console.log("generic error happened", error);
    }
  };

  useEffect(() => {
    getCityDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Link to="/favourites" className="nav-link">
        <Button className="bg-white text-black px-4 border border-2 border-primary my-3 back__button">
          See Favourites
        </Button>
      </Link>
      {city !== null && <CityCard city={city} />}
      <Link to="/" className="nav-link">
        <Button className="bg-white text-black px-4 border border-2 border-primary my-5 back__button">
          Go Back
        </Button>
      </Link>
    </Container>
  );
}

export default CityPage;
