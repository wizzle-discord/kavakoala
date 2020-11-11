import { SelectField } from 'components/shared';
import { Cart, CustomerAddress } from 'interfaces';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

interface StepProps {
  cart: Cart
  onChange: (data: Partial<Cart>) => void
}

const ProductItem = ({ item, onSelect }: any) => (
  <Col xs={'auto'} className='pl-0 checkout-product'>
    {item.product.name}
    <SelectField
      value={item.qty.toString()}
      onChange={(newQty: string) => onSelect(newQty, item.product.id)}
      items={[
        {label: '40 Pills', value: '40'},
        {label: '200000000 Pills', value: '200'},
      ]}
      hasBorder />
  </Col>
)

const ShippingItem = ({ address, ...props }: any) => {
  const onChange = (data: Partial<CustomerAddress>) => {
    props.onChange({ address: {
      ...address,
      ...data
    }});
  }
  
  return (
  <Form>
    <Form.Row>
      <Col>
        <Form.Control placeholder="First Name" value={address.firstName} onChange={ e => onChange({ firstName: e.target.value })} />
      </Col>
      <Col>
        <Form.Control placeholder="Last Name" value={address.lastName} onChange={ e => onChange({ lastName: e.target.value })} />
      </Col>
    </Form.Row>
    <Form.Row>
      <Col>
        <Form.Control placeholder="Email" value={address.email} onChange={ e => onChange({ email: e.target.value })} />
      </Col>
      <Col>
        <Form.Control placeholder="Enter email again" value={address.emailConfirm} onChange={ e => onChange({ emailConfirm: e.target.value })} />
      </Col>
    </Form.Row>
    <Form.Row>
      <Col>
        <Form.Control placeholder="Address 1" value={address.address1} onChange={ e => onChange({ address1: e.target.value })} />
      </Col>
    </Form.Row>
    <Form.Row>
      <Col>
        <Form.Control placeholder="Address 2 (optional)" value={address.address2} onChange={ e => onChange({ address2: e.target.value })} />
      </Col>
    </Form.Row>
    <Form.Row>
      <Col>
        <Form.Control placeholder="City" value={address.city} onChange={ e => onChange({ city: e.target.value })} />
      </Col>
      <Col>
        <Form.Control placeholder="State/region" value={address.state} onChange={ e => onChange({ state: e.target.value })} />
      </Col>
    </Form.Row>
    <Form.Row>
      <Col>
        <Form.Control placeholder="Postal code" value={address.postcode} onChange={ e => onChange({ postcode: e.target.value })} />
      </Col>
      <Col>
        <Form.Control placeholder="Country" value={address.emailConfirm} onChange={ e => onChange({ emailConfirm: e.target.value })} />
      </Col>
    </Form.Row>
  </Form>
)};

const CheckoutStep1 = ({ cart, ...props }: StepProps) => {
  const onSelect = (qty: string, productId: number) => {
    const items = [ ...cart.items ];
    const idx = items.findIndex(i => i.product.id === productId);
    if (idx !== -1) {
      items[idx].qty = Number(qty);
    }
    props.onChange({ items });
  }

  return (
    <>
    <Row>
      <h5>Products</h5> {cart.coupon}
    </Row>
    <Row>
      {cart.items.map( (item, i) => <ProductItem key={i} item={item} onSelect={onSelect} />)}
    </Row>
    <Row className='mt-4'>
      <h5>Shipping</h5>
    </Row>
    <ShippingItem address={cart.address} onChange={props.onChange} />
    </>
  );
}

export default CheckoutStep1;
