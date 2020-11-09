import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Footer = () => (
  <Row className='footer border bg-header d-xs-none pt-5'>
    <Col xs={12} lg={9} className={ 'm-auto align-self-center text-center' }>
      <Row className='justify-content-center m-auto'>
        <Col>
          <Row className='footer-col'>
            <h4 className='text-secondary'>Kavakoala</h4>
            <a href="#blog">Blog</a>
            <a href="#About">About</a>
          </Row>
        </Col>
        <Col>
          <Row className='footer-col'>
          <h4>Help</h4>
            <a href="#shippinh">Shipping & Payment</a>
            <a href="#howtobuy">How to buy Bitcoins</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact Us</a>
          </Row>
        </Col>
        <Col>
          <Row className='footer-col'>
            <h4 className='text-primaryLight'>Products</h4>
              <a href="#kava">KavaXXXX</a>
          </Row>
        </Col>
        <Col>
          <Row className='footer-col'>
            <h4 className='text-primaryMid'>More</h4>
            <a href="#press">KavaKoala in the Press</a>
            <a href="#history">History of KavaKoala</a>
            <a href="#dosage">Dosage</a>
            <a href="#effects">Side Effects</a>
          </Row>
        </Col>
        <Col>
          <Row className='footer-col'>
            <h4 className='text-primaryDark'>Stay in touch</h4>
            <a href="#reddit">Reddit</a>
            <a href="#twitter">Twitter</a>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
)

export default Footer;