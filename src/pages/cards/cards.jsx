import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './cards.css';
import { useRef, useState } from 'react';

// const getCloud = () => {
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid at molestias atque quod, fuga consequatur aliquam aspernatur, odio repellat asperiores adipisci eligendi inventore expedita dignissimos laborum beatae commodi dicta, laboriosam rem voluptate. Tempora, dolor voluptatem quis sunt tempore, illum beatae, sit numquam aspernatur labore rem laudantium blanditiis aliquid quae culpa.'
//     .split(' ')
//     .sort(() => (Math.random() > 0.5 ? 1 : -1));
// };
const getCloud = () =>
  `loreLorem ipsum dolor sit amet consectetur adipisicing elit. Magnam temporibus, sequi fugiat dolore tempora cumque ducimus nihil excepturi nisi quasi atque libero. Hic pariatur incidunt laudantium sunt ipsam, alias harum tempora dignissimos reprehenderit, doloribus optio magnam repellat, officiis beatae facere?m40`.split(
    ' '
  );

export default function KolomType() {
  const [userInput, setUserInput] = useState('');
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const cloud = useRef(getCloud());

  // function Word(props) {
  //   return <span>{props.text} </span>;
  // }

  function processInput(value) {
    if (value.endsWith(' ')) {
      // the value has finished this word
      setActiveWordIndex((index) => index + 1);
      setUserInput('');
    } else {
      setUserInput(value);
    }
  }
  return (
    <Card body className=" rounded " id="outer">
      <Card body style={{ backgroundColor: '#E4F4F3' }}>
        <p className="fs-4" style={{ textAlign: 'justify' }}>
          {cloud.current.map((word, index) => {
            if (index === activeWordIndex) {
              return <b>{word} </b>;
            }
            return <span>{word} </span>;
          })}
        </p>
      </Card>
      <br />
      <br />
      <Card body style={{ backgroundColor: '#E4F4F3' }}>
        <InputGroup size="lg">
          {/* <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text> */}
          <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm" type="text" value={userInput} onChange={(e) => processInput(e.target.value)} />

          {/* <input type="text" value={userInput} onChange={(e) => processInput(e.target.value)} /> */}
        </InputGroup>
        <Row>
          <Col md={6} className="mt-3">
            <div className="text-success fw-bold fs-5">100WPM</div>
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
