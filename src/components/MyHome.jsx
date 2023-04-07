import { Container } from "react-bootstrap";
import HomeCard from "./HomeCard";
import InputSearch from "./InputSearch";
import CityCard from "./CityCard";

const MyHome = () => {
  return (
    <Container fluid>
      <InputSearch />
      <div></div>
      <div>
        <CityCard />
      </div>
    </Container>
  );
};

export default MyHome;
