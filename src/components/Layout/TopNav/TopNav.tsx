import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { NavDropdown } from 'components/shared';
import {SvgGlobe, SvgNavLogo, SvgMascot} from 'components/shared/Svg';

const TopNav = () => (
  <Row className='topnav bg-header'>
    <Col xs='auto' className={ 'm-auto p-0' }>
      <Navbar variant="dark" expand={ 'lg' } className={ 'h-100 pb-0 pt-0 pr-0' }>
        <Container fluid className={ 'pl-0 pr-0' }>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="/">
            <SvgNavLogo className="d-inline-block align-top " />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto bg-header" defaultActiveKey={ '/' }>
              <Nav.Link className='text-secondary' href="#buy">Buy</Nav.Link>
              <Nav.Link className='text-secondary' href="#products">Products</Nav.Link>
              <Col lg={3} className='ml-3 mascot-logo d-lg-block d-none'>
                <SvgMascot className="d-inline-block align-top svg-inline--fa" />
              </Col>
              <Nav.Link className='text-secondary' href="#shipping">Shipping & Payment</Nav.Link>
              <NavDropdown
                items={[{value: '#nav1', label: 'More 1'}, {}, {value: '#nav2', label: 'More 2'}, {value: '#more3', label: 'More 3'}]}
              >More</NavDropdown>
              <NavDropdown
                text='white'
                items={[{value: '#nav4', label: 'US 1'}, {}, {value: '#nav5', label: 'US 2'}, {value: '#more6', label: 'US 3'}]}
              >
                <SvgGlobe className='svg-inline--fa' />
                US
              </NavDropdown>
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Col>
  </Row>
)

export default TopNav;