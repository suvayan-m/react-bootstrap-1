import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
function CompButtons() {
  return (
    <Container>
      <Row>
        <Col>
          <Button as="a" variant="primary" className="me-5">
            Button as link
          </Button>
          <Button as="a" variant="secondary" className="me-5">
            Button as link
          </Button>
          <Button as="a" variant="warning" className="me-5">
            Button as link
          </Button>
          <Button as="a" variant="danger" className="">
            Button as link
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CompButtons;
