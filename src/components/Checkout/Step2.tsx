import { BtcPaymentInfo, Cart, CcPaymentInfo } from 'interfaces';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';

interface StepProps {
  cart: Cart
  onChange: (data: Partial<Cart>) => void
}


interface CcFormProps {
  paymentInfo: CcPaymentInfo
  onChange: (data: Partial<CcPaymentInfo>) => void
}
const CcForm = ({ paymentInfo, onChange }: CcFormProps) => (
  <>
    <Form.Row>
      <Col>
        <Form.Control placeholder="Card Number" type='number' value={paymentInfo.number} onChange={ e => onChange({ number: e.target.value })} />
      </Col>
    </Form.Row>
    <Form.Row>
      <Col>
        <Form.Control placeholder="Expiration Date" value={paymentInfo.expiresAt} onChange={ e => onChange({ expiresAt: e.target.value })} />
      </Col>
      <Col>
        <Form.Control placeholder="CCV" type='number' value={paymentInfo.ccv} onChange={ e => onChange({ ccv: e.target.value })} />
      </Col>
    </Form.Row>
  </>
)

const PaymentForm = ({ cart, ...props }: StepProps) => {
  const onChange = (data: Partial<CcPaymentInfo|BtcPaymentInfo>) => {
    props.onChange({ paymentInfo: {
      ...cart.paymentInfo,
      ...data
    }});
  }
  
  return (
  <Form className='mt-4 checkout-payment'>
    <h5>Payment Method</h5>
    <Row className='mb-4'>
      <Col xs={12}>
        <ButtonGroup className='w-100'>
          <Button
            variant={cart.paymentMethod === 'Credit Card' ? 'secondary' : 'inactive'}
            onClick={() => props.onChange({ paymentMethod: 'Credit Card'})}>
              Credit Card</Button>
          <Button
            variant={cart.paymentMethod === 'Bitcoin' ? 'secondary' : 'inactive'}
            onClick={() => props.onChange({ paymentMethod: 'Bitcoin'})}>
              Bitcoin</Button>
        </ButtonGroup>
      </Col>
    </Row>
    {cart.paymentMethod === 'Credit Card' && <CcForm paymentInfo={cart.paymentInfo as CcPaymentInfo} onChange={onChange} />}
  </Form>
)};

const CheckoutStep2 = ({ cart, onChange }: StepProps) => {
  return (
    <>
    <h5>Coupon</h5>
    <Row>
      <Col>
        <Form.Control className='w-50' placeholder="Coupon (optional)" value={cart.coupon} onChange={ e => onChange({ coupon: e.target.value })} />
        <Form.Text className='text-secondary'>
          As a returning customer,  enter your last order ID to get a 10% discount!
        </Form.Text>
      </Col>
    </Row>
    <PaymentForm cart={cart} onChange={onChange} />
    </>
  );
}

export default CheckoutStep2;
