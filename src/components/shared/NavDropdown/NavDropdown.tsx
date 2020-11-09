import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';

const CustomToggle = React.forwardRef(({ children, text = 'secondary' }: any, ref: any) => (
  <Nav.Link ref={ref} className={`nav-dropdown text-${text} pr-2 `}>
    {children}
    <FontAwesomeIcon icon='chevron-down' className='ml-2' />
  </Nav.Link>
));

interface NavDropdownProps {
  children: any
  text?: string
  className?: string
  items: {
    value?: string
    label?: string
    icon?: IconProp
  }[]
}

const NavDropdown = ({ children, items, className, text }: NavDropdownProps) => {
  const [navOpen, setNavOpen] = React.useState(false);
  return (
    <Dropdown id="basic-dropdown" className={'w-100 nav-dropdown ' + className} onMouseEnter={() => setNavOpen(true)} onMouseLeave={() => setNavOpen(false)}>
      <Dropdown.Toggle as={CustomToggle} text={text}>
        { children }
      </Dropdown.Toggle>
      <Dropdown.Menu show={navOpen} className={`shadow bg-bg ${navOpen ? 'show' : ''}`}>
        { items.map((item, i) => item.value ? (
          <Dropdown.Item key={ i } href={item.value}> 
            { item.icon && <FontAwesomeIcon icon={ item.icon } className={ 'mr-3' } /> }
            { item.label }
          </Dropdown.Item>
        ) : <Dropdown.Divider key={i} />)}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NavDropdown;