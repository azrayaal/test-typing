import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import KolomType from '../cards/cards';
import './home.css';

export default function Home() {
  return (
    <>
      <div className="home">
        <Container fluid="md">
          <h1 className="pt-1 ">
            {/* <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_2t3k6x8x.json" mode="bounce" background="transparent" speed="1" style={{ width: '150px', height: '150px' }} className=''></lottie-player> */}
            Typing-test
          </h1>
          <Row>
            <Col sm={12} md={8} className="pt-2">
              <KolomType style={{ width: '450px', height: '450px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
            </Col>
            <Col sm={12} md={4}>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_ywajvrnp.json"
                mode="bounce"
                background="transparent"
                speed="1"
                style={{ width: '450px', height: '450px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                autoplay
              ></lottie-player>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
