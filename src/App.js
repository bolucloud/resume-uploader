import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
        </Row>
        <div>Hiring Now</div>
        <div>Think you got what it takes to join the team?</div>
        <div>Lorem ipsum bla bla bla </div>
        <Button variant="primary">Upload Resume</Button>
      </Container>
    </div>
  );
}

export default App;
