import { Container } from "react-bootstrap";
import HomeCard from "./HomeCard";
import HomeCarousel from "./HomeCarousel";
import InputSearch from "./InputSearch";
import CityCard from "./CityCard";

const MyHome = () => {
  return (
    <Container fluid>
      <InputSearch />
      <div>
        <HomeCard />
        <HomeCarousel />
      </div>
      <div>
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
      </div>
    </Container>
  );
};

export default MyHome;
