import InputSearch from "./InputSearch";
import CityCard from "./CityCard";
import HomeCard from "./HomeCard";
import { Container, Row, Col } from "react-bootstrap";

const MyHome = () => {
  return (
    <Container className="bg-light" fluid>
      <InputSearch />
      <CityCard />
      <Row className="my-2 d-flex flex-row">
        <Col xs={10} md={6} className="mx-auto mb-4">
          <HomeCard city={"Beijing"} />
          <HomeCard city={"New York"} />
          <HomeCard city={"Rome"} />
          <HomeCard city={"Moscow"} />
          <HomeCard city={"London"} />
          <HomeCard city={"Paris"} />
        </Col>
      </Row>
    </Container>
  );
};

export default MyHome;
