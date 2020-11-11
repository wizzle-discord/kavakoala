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
    <Col xs={6} className='p-0 align-self-center'>
      <a href='#test' className='text-textPrimary'>Cancel</a>
    </Col>
    <Col>
      <NavBtns activeTab={activeTab} onTab={onTab} />
    </Col>
  </Row>
);

export default Footer;
