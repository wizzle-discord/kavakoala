import { Button } from 'components/shared';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Intro = () => (
  <Row className='intro bg-header pt-5 pb-5'>
    <Col xs='auto' className={ 'm-auto align-self-center text-center' }>
      <h1>Hi! We sell Kava!</h1>
      <Col>Enjoy <a className='text-secondary mr-1 ml-1' href="#free">free shipping with tracking </a> worldwide and <a className='text-secondary ml-1' href="#refunds">full refunds!</a></Col>
      <Col>We accept payments by <a className='text-secondary ml-1' href="#visa">VISA, Mastercard, and Bitcoin.</a></Col>
      <Row className='intro-btns mt-5'>
        <Button variant={'primary'} className='btn-gradient mb-3'>Buy Kava</Button>
        <Button variant={'outline-white'} className='mb-3'>Order Sample Pack</Button>
      </Row>
      <Row>
        <Col>
          <Row className='justify-content-center'>Kava 200mg</Row>
          <Row className='justify-content-center'>Lorem Ipsum</Row>
        </Col>
        <Col>
          <Row className='justify-content-center'>Lorem Ipsum</Row>
          <Row className='justify-content-center'>Lorem Ipsum</Row>
        </Col>
      </Row>
      <Row className='justify-content-center mt-5'>
        <h3>
          <a className='text-white' href='#test'>What is Kava?</a>
        </h3>
      </Row>
    </Col>
  </Row>
)

export default Intro;