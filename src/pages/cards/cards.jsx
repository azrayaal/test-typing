import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './cards.css';
import React, { useRef, useState, useEffect } from 'react';

const getCloud = () =>
  `Sejak tahun 2012 hingga saat ini, Cerpenmu telah menerbitkan puluhan ribu cerpen kiriman karya anak bangsa, sekaligus menjadi media situs baca cerpen online bermoderasi terbesar yang pernah ada, banyak cerpen menarik yang terbagi ke dalam lebih dari 50 kategori/genre yang bisa kamu baca dan nikmati di sini.`.split(
    ' '
  );

function Word(props) {
  const { text, active, correct } = props;

  if (correct === true) {
    return <span className="correct">{text} </span>;
  }
  if (correct === false) {
    return <span className="incorrect">{text} </span>;
  }
  if (active) {
    return <span className="active">{text} </span>;
  }
  return <span>{text} </span>;
}

function Timer(props) {
  const { startCounting, correctWords } = props;
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let id;
    if (startCounting) {
      id = setInterval(() => {
        // do something
        setTimeElapsed((oldTime) => oldTime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(id);
    };
  }, [startCounting]);

  const minutes = timeElapsed / 60;

  return (
    <Row>
      <Col className="text-danger fw-bold fs-5">Time: {timeElapsed}</Col>
      <Col className="text-success fw-bold fs-5">{(correctWords / minutes || 0).toFixed(2)} WPM</Col>
    </Row>
  );
}

Word = React.memo(Word);

export default function KolomType() {
  const [userInput, setUserInput] = useState('');
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);
  const [startCounting, setStartCounting] = useState(false);
  const cloud = useRef(getCloud());

  function processInput(value) {
    if (activeWordIndex === cloud.current.length) {
      // stop
      return;
    }

    if (!startCounting) {
      setStartCounting(true);
    }

    if (value.endsWith(' ')) {
      // the value has finished this word

      if (activeWordIndex === cloud.current.length - 1) {
        // overflow
        setStartCounting(false);
        setUserInput('Completed');
      } else {
        setUserInput('');
      }

      setActiveWordIndex((index) => index + 1);
      // correct word
      setCorrectWordArray((data) => {
        const word = value.trim();
        const newResult = [...data];
        newResult[activeWordIndex] = word === cloud.current[activeWordIndex];
        return newResult;
      });
    } else {
      setUserInput(value);
    }
  }

  return (
    <Card body className=" rounded " id="outer">
      <Card body style={{ backgroundColor: '#E4F4F3' }}>
        <p className="fs-4" style={{ textAlign: 'justify' }}>
          {cloud.current.map((word, index) => {
            return <Word text={word} active={index === activeWordIndex} correct={correctWordArray[index]} />;
          })}
        </p>
      </Card>
      <br />
      <br />
      <Card body style={{ backgroundColor: '#E4F4F3' }}>
        <InputGroup size="lg">
          {/* <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text> */}
          <Form.Control aria-label="Large" aria-describedby="inputGroup-sizing-sm" type="text" value={userInput} onChange={(e) => processInput(e.target.value)} placeholder="Start Typing" />

          {/* <input type="text" value={userInput} onChange={(e) => processInput(e.target.value)} /> */}
        </InputGroup>
        <Row>
          <Col md={6} className="mt-3">
            <Timer startCounting={startCounting} correctWords={correctWordArray.filter(Boolean).length} />
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
