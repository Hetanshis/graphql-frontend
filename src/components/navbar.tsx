import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
export default function NavBar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            <form className="d-flex ms-auto order-5">
              <button className="btn btn-outline-success" type="submit">
                Home
              </button>
            </form>
          </Nav.Link>
        </Nav>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link to="/Register" as={NavLink}>
            <button className="btn btn-outline-success" type="submit">
              Register
            </button>
          </Nav.Link>

          <Nav.Link to="/profile" as={NavLink}>
            <button className="btn btn-outline-success" type="submit">
              Profile
            </button>
          </Nav.Link>

          {/* <Nav.Link to="/forgotPassword" as={NavLink}>
            <button className="btn btn-outline-success" type="submit">
              ForgotPassword
            </button>
          </Nav.Link> */}
        </Nav>
      </Container>
    </NavbarBs>
  );
}
