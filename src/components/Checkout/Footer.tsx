import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBtns from './NavBtns';

interface FooterProps {
  activeTab: number
  onTab: (tab: number) => void
}
const Footer = ({ activeTab, onTab }: FooterProps) => (
  <Row className='p-4 checkout-footer'>
    <Col>Cancel</Col>
    <Col xs='auto'>
      <NavBtns activeTab={activeTab} onTab={onTab} />
    </Col>
  </Row>
);

export default Footer;
