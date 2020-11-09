import { Button } from 'components/shared';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Product = () => (
  <Row className='product pt-5 pb-5'>
    <Col sm={5} xs={10} className={ 'm-auto align-self-center' }>
      <Row>
        <h1>Here's the magic:</h1>
      </Row>
      <Row className='product-description'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Row>
      <Row className='mt-4 mb-2'>
        <Button variant={'primary2'}>Buy Kava</Button>
      </Row>
      <Row className='mt-4 mb-2'>
        <Button variant={'outline-primary'}>Order Sample Pack</Button>
      </Row>
    </Col>
    <Col sm={5} xs={10} className='mb-auto mt-auto'>
      <img alt='medicine-bottle' src='/img/pill_bottle.png' className='img-fluid' />  
    </Col>
  </Row>
)

export default Product;