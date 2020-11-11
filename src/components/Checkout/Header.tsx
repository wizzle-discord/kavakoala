import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBtns from './NavBtns';
import { SvgStep1, SvgStep2, SvgStep3 } from 'components/shared/Svg';

interface HeaderProps {
  activeTab: number
  onTab: (tab: number) => void
}
const Header = ({ activeTab, onTab }: HeaderProps) => (
  <Row className='p-4 checkout-header'>
    {/* Shipping */}
    <Col xs={2} className='p-0 align-self-center'>
      <SvgStep1 className={activeTab === 1 ? 'active' : 'step-completed'} />
    </Col>
    {/* Payment */}
    <Col xs={2} className='p-0 align-self-center'>
      <SvgStep2 className={activeTab === 2 ? 'active' : activeTab === 3 ? 'step-completed' : ''} />
    </Col>
    {/* Confirmation */}
    <Col xs={2} className='p-0 align-self-center'>
      <SvgStep3 className={activeTab === 3 ? 'active' : ''} />
    </Col>
    <Col xs>
      <NavBtns activeTab={activeTab} onTab={onTab} />
    </Col>
  </Row>
);

export default Header;
