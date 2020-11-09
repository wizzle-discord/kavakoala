import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Card} from 'components/shared';

const Features = () => (
  <Row className='features pt-5 pb-5'>
    <Col className={ 'm-auto align-self-center text-center' }>
      <h1>Order like it's Amazon.</h1>
      <Row className='mt-5 mb-5'>
        <Col className='m-auto'>
        <span className='d-block'>Ordering high quality Kava has never been easier.</span>
        <span className='d-block'>We're KavaKoala, your new online Kava pharmacy.</span>
        <a href='#shipping' className='d-block'>Shipping {'&'} Payment <img alt='chevron' src={`/img/chevron_blue.svg`} /></a>
        </Col>
      </Row>
      <Row className='justify-content-center mt-5 m-auto features-card-body'>
        <Card title='Free express shipping' icon='delivery'>
        Free express shipping via EMS within
        <span className='w-100'>24 hours after placing an order</span>
        </Card>
        <Card title='Credit card & Bitcoin' icon='credit_bitcoin'>
          Choose convenient or anonymous.
          <span className='w-100'>We never store payment information.</span>
        </Card>
        <Card title='Full Refunds' icon='$'>
          If your parcel gets lost or stuck in
          customs, we refund the full amount.
        </Card>

        <Card title='Returning Customer Discount' icon='10percent'>
        A token of gratitude for our customers.
        Stack with Bitcoin discount for 30% off.
        </Card>
        <Card title='Bitcoin Payment Discount' icon='20percent'>
        We're supporting the revolution.
        <a href='#howtobuy' className='d-block'>How to buy Bitcoins<img alt='chevron' src={`/img/chevron_blue.svg`} /></a>
        </Card>
        <Card title='Customer Satisfaction' icon='star'>
        The Internet loves us.
        <a href='#reviews' className='w-100'>See the reviews<img alt='chevron' src={`/img/chevron_blue.svg`} /></a>
        </Card>
      </Row>
    </Col>
  </Row>
)

export default Features;