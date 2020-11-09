import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button, { ButtonProps } from 'react-bootstrap/Button';

interface BtnProps extends ButtonProps { 
  icon?: IconProp
  tooltip?: string
}
const MyButton = ({ children, icon = 'chevron-right', ...props}: BtnProps) => (
  <Button {...props} className={'my-btn ' + props.className}>
    {children}
    <FontAwesomeIcon icon={icon} className='ml-2' />
  </Button>
)

export default MyButton;