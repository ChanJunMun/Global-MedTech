import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap"

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Navbar bg="primary" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand href="/">Global MedTech</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/our-team">Our Team</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
      </Container>
    </Navbar>

    <Container>
      <Row>
        <Col>
          <Component {...pageProps} />
        </Col>
      </Row>
    </Container>

  </>
  )
}

export default MyApp
