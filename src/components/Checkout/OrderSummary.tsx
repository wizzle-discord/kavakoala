import React from 'react';
import Row from 'react-bootstrap/Row';
import { Cart } from 'interfaces';

interface CheckoutProps {
  cart: Cart
}
const CheckoutContainer = ({ cart }: CheckoutProps) => (
  <Row>
    <h5>Order Summary</h5> {cart.coupon}
  </Row>
);

export default CheckoutContainer;
