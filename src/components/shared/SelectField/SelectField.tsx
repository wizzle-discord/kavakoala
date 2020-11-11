import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export interface SelectItem {
  value: string|number
  label: string|number
  disabled?: boolean
}
export interface SelectProps {
  value: string
  onChange: (arg0: string) => void
  items: SelectItem[]
  label?: string
  hasBorder?: boolean
}
const SelectField = ({ items, label, value, onChange, hasBorder }: SelectProps) => (
  <InputGroup className={`selectfield ${hasBorder ? 'outlined' : ''}`}>
    {label ? <InputGroup.Prepend>
      <InputGroup.Text className={ `bg-input text-textPrimary ${label ? 'p-1' : 'p-0 pl-1'} w-100` }>
        {label}
      </InputGroup.Text>
    </InputGroup.Prepend> : null}
    <Form.Control value={value} as="select" onChange={ (e: any) => onChange(e.target.value)} className={ `bg-input text-textSecondary border-0` }>
      {items.map((item: SelectItem, i: number) => <option key={i} disabled={item.disabled} value={item.value}>{item.label}</option>)}
    </Form.Control>
    <span className="text-secondary input-group-btn my-auto select-arrow"><FontAwesomeIcon icon={'chevron-down'} /></span>
  </InputGroup>
);

export default SelectField