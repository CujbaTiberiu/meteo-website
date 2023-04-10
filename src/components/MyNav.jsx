import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <Link className="text-decoration-none text-light mx-3" to="/">
            {/* <img
              className="img__logo"
              src={process.env.PUBLIC_URL + "/public/EpiMeteo (1).png"}
              alt="epimeteo logo"
            />{" "} */}
            EpiMeteo
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Item>
              <Link
                className="text-decoration-none text-light mx-3 mx-2"
                to="/"
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                className="text-decoration-none text-light mx-3"
                to="/favourites"
              >
                Favourites
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
