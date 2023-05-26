import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="img"
              src="https://www.vandelaydesign.com/wp-content/uploads/tutorial-preview-image-4.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Card Creater
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
