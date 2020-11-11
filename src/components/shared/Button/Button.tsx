import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button, { ButtonProps } from 'react-bootstrap/Button';

interface BtnProps extends ButtonProps { 
  icon?: IconProp|null
  iconPos?: 'start' | 'end'
  tooltip?: string
}
const MyButton = ({ children, icon = 'chevron-right', iconPos = 'end', ...props}: BtnProps) => (
  <Button {...props} className={props.className}>
    {icon && iconPos === 'start' ? <FontAwesomeIcon icon={icon} className='mr-2' /> : ''}
    {children}
    {icon && iconPos === 'end' ? <FontAwesomeIcon icon={icon} className='ml-2' /> : ''}
  </Button>
)

export default MyButton;