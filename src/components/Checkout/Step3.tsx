import {  Cart, CcPaymentInfo } from 'interfaces';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface StepProps {
  cart: Cart
  onChange: (data: Partial<Cart>) => void
  onTab: (tab: number) => void
}


const TextField = ({ label, children, className }: {
  label: string
  children: string
  className?: string
}) => (
  <Row className={'summary-text-field ' + (className ?? '')}>
    <Col xs={3} className='summary-text-label'>
      {label}
    </Col>
    <Col xs={9}>
      {children}
    </Col>
  </Row>
)

const CheckoutStep3 = ({ cart, onTab }: StepProps) => {
  const payment = cart.paymentInfo as CcPaymentInfo;
  return (
    <>
    <Row>
      <Col lg={{ span: 9, offset: 3 }}>
      <h5>Shipping - <a href="#edit" onClick={() => onTab(1)}>Edit</a></h5>
      </Col>
    </Row>
    <TextField label='Name'>{[cart.address.firstName, cart.address.lastName].join(' ')}</TextField>
    <TextField label='Email'>{cart.address.email}</TextField>
    <TextField label='Street'>{cart.address.address1}</TextField>
    <TextField label='Postal Code, city'>{[cart.address.postcode, cart.address.city].join(' ')}</TextField>
    <TextField label='Country'>{cart.address.country?.name}</TextField>
    <TextField label='' className='summary-warning'>
      Please make sure your address doesn’t contain typos (e.g. wrong street number). Undeliverable shipments are lost and cannot be refunded or reshipped.
    </TextField>
    <Row className='mt-5'>
      <Col lg={{ span: 9, offset: 3 }}>
      <h5>Payment method - <a href="#edit" onClick={() => onTab(2)}>Edit</a></h5>
      </Col>
    </Row>
    <TextField label='Account #'>{'*****' + payment.number.substr(-4)}</TextField>
    <TextField label='Expiry Date'>{payment.expiresAt}</TextField>
    </>
  );
}

export default CheckoutStep3;
