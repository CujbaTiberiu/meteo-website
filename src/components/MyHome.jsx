import { Container } from "react-bootstrap";

import InputSearch from "./InputSearch";
import CityCard from "./CityCard";

const MyHome = () => {
  return (
    <Container fluid>
      <InputSearch />
      <div>
        <CityCard />
      </div>
    </Container>
  );
};

export default MyHome;
