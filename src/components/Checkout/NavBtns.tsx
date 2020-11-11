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
    {activeTab !== 3 && <Button icon={null} variant='secondary' onClick={() => onTab(activeTab + 1)}>Next</Button>}
    {activeTab === 3 && <Button icon={'check'} iconPos='start' variant='secondary' onClick={() => console.log('SUBMIT')}>Order</Button>}
  </Row>
);

export default NavBtns;
