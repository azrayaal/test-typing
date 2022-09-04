import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './cards.css';

export default function KolomType() {
  return (
    <Card body className=" rounded " id="outer">
      <Card body style={{ backgroundColor: '#E4F4F3' }}>
        <div className="fs-4" style={{ textAlign: 'justify' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid at molestias atque quod, fuga consequatur aliquam aspernatur, odio repellat asperiores adipisci eligendi inventore expedita dignissimos laborum beatae commodi dicta,
          laboriosam rem voluptate. Tempora, dolor voluptatem quis sunt tempore, illum beatae, sit numquam aspernatur labore rem laudantium blanditiis aliquid quae culpa.
        </div>
      </Card>
      <br />
      <br />
      <Card body style={{ backgroundColor: '#E4F4F3' }}>
        <InputGroup size="lg">
          {/* <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text> */}
          <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
        </InputGroup>
        <Row>
          <Col md={6} className="mt-3">
            <div className="text-success fw-bold fs-5">129wpm</div>
          </Col>
          <Col md={6}>
            <Button className="mt-3 float-end d-flex align-items-center" variant="danger">
              RESET
            </Button>
          </Col>
        </Row>
      </Card>
    </Card>
  );
}
