import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CartItem } from 'interfaces';

interface CheckoutProps {
  items: CartItem[]
  totalCost: number
}

const SummaryItem = ({ children, cost }: {
  children: any
  cost?: string|number }) => (
  <Row className='checkout-order-summary-item'>
    <Col className='align-self-center'>
      {children}
    </Col>
    <Col xs={'auto'} className='align-self-center'>
      ${cost ?? 0}
    </Col>
  </Row>
)

const CheckoutContainer = ({ items, totalCost }: CheckoutProps) => (
  <Col className='checkout-order-summary'>
    <Row>
      <Col>
        <h5>Order Summary</h5>
      </Col>
    </Row>
    {items.map((item, i) => (
      <SummaryItem key={i} cost={item.qty * item.product.price}>
        {item.qty} x {item.product.name}
      </SummaryItem>
    ))}
    <SummaryItem>
      <a href="#shipping">Free international shipping with tracking</a>
    </SummaryItem>
    <SummaryItem>
      <a href="#refunds">Free refund or reshipment in case of non-delivery</a>
    </SummaryItem>
    <SummaryItem>
      Subtotal
    </SummaryItem>
    <h4 className='checkout-order-summary-total'>
      <span>US$</span>
      {totalCost}
    </h4>
  </Col>
);

export default CheckoutContainer;
