import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

function CompAlert() {
  return (
    <Container className="mb-4">
      <Row>
        <Col>
          <Alert dismissible variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>Change this and that and try again.</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default CompAlert;
