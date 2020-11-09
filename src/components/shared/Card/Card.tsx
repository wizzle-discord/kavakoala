import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Card = ({ icon, title, subtitle, children }: {
  icon: string
  title: string
  subtitle?: string
  children: any
}) => (
  <Col lg='auto' md={6}>
    <Col className='custom-card'>
      <Row className='justify-content-center custom-card-img mb-2'>
        <img alt="" src={`/img/${icon}.svg`} />
      </Row>
      <Row className='justify-content-center'>
        <h5>{title}</h5>
        {subtitle ? <h6>{subtitle}</h6> : ''}
      </Row>
      <Row className='justify-content-center body'>
        {children}
      </Row>
    </Col>
  </Col>
);

export default Card