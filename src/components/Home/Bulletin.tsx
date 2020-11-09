import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Bulletin = () => (
  <Row className='bulletin bg-white text-primary'>
    <Col className={ 'm-auto align-self-center text-center' }>
      <b>News Bulletin - Lorem Ipsum Dolor Sit</b> - Blah blah blah blah blah  <a href='#test'>Link Text <img alt='chevron' src={`/img/chevron_blue.svg`} /></a>
    </Col>
  </Row>
)

export default Bulletin;