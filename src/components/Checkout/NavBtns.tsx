import React from 'react';
import { Button } from 'components/shared';
import Row from 'react-bootstrap/Row';

interface NavBtnsProps {
  activeTab: number
  onTab: (tab: number) => void
}
const NavBtns = ({ activeTab, onTab }: NavBtnsProps) => (
  <Row className="checkout-nav-btns">
    <Button className='mr-4' icon={null} variant='outline-primary' disabled={activeTab === 1} onClick={() => onTab(activeTab-1)}>Back</Button>
    <Button icon={null} variant='secondary' disabled={activeTab === 3} onClick={() => onTab(activeTab + 1)}>Next</Button>
  </Row>
);

export default NavBtns;
