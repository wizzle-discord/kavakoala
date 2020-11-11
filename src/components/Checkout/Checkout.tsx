import React from 'react';
// import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Cart } from 'interfaces';
import CheckoutStep1 from './Step1';
import CheckoutStep2 from './Step2';
import CheckoutStep3 from './Step3';
import Header from './Header';
import Footer from './Footer';
import OrderSummary from './OrderSummary';
import { SvgPaymentMethod, SvgLock } from 'components/shared/Svg';

interface CheckoutProps {
  cart: Cart
  onChange: (data: Partial<Cart>) => void
}

const TabMap: Record<number, any> = {1: CheckoutStep1, 2: CheckoutStep2, 3: CheckoutStep3 };
const CheckoutContainer = ({ cart, onChange }: CheckoutProps) => {
  const [activeTab, setActiveTab] = React.useState(1);
  const TabComponent = TabMap[activeTab];

  const onTab = (tab: number) => {
    // TODO: validate, make sure user can proceed
    setActiveTab(tab);
  }

  return (
  <Row className='bg-bg2 justify-content-center checkout'>
    <Col lg={8} sm={12} md={11}>
    <Row className='mt-5 mb-4 justify-content-center'>
      <SvgPaymentMethod />
    </Row>
    <Row>
      <h6>
      <SvgLock /> Secure Checkout
      </h6>
    </Row>
    <Row className='bg-white checkout-body mb-5'>
      <Col>
        <Header activeTab={activeTab} onTab={onTab}/>
        <Row className='p-4'>
          <Col xs={8}>
            <TabComponent cart={cart} onChange={onChange} />
          </Col>
          <Col xs={4}>
            <OrderSummary cart={cart} />
          </Col>
        </Row>
        <Footer activeTab={activeTab} onTab={onTab}/>
      </Col>
    </Row>
    </Col>
   
  </Row>
)};

export default CheckoutContainer;
