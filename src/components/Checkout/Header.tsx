import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBtns from './NavBtns';

interface HeaderProps {
  activeTab: number
  onTab: (tab: number) => void
}
const Header = ({ activeTab, onTab }: HeaderProps) => (
  <Row className='p-4 checkout-header'>
    <Col>asdf</Col>
    <Col xs='auto'>
      <NavBtns activeTab={activeTab} onTab={onTab} />
    </Col>
  </Row>
);

export default Header;
