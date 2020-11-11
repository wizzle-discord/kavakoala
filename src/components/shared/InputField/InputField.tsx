import React from 'react';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControlProps } from 'react-bootstrap/lib/FormControl';
import BigNumber from 'bignumber.js';
import Form from 'react-bootstrap/Form';
// import Col from 'react-bootstrap/Col';

interface Props extends Omit<FormControlProps, 'onChange'> {
  prependComponent?: React.ReactChild
  appendComponent?: React.ReactChild
  aria: string
  onChange: (arg0: string) => void
  variant?: 'outlined' | 'underlined'
  helperTxt?: string
} 

const InputField = ({ prependComponent, appendComponent, className = '', value, type, aria, min, max, step, disabled, onChange, variant = 'outlined', helperTxt, required, ...props }: Props) => {
  const ref = React.useRef(null);
  const [hasFocus, setHasFocus] = React.useState(false);
  const isRequired = required && !value?.toString().length;
  const onSubmit = (e: any) => {
    if (!onChange) {
      return;
    }
    if (type === 'number') {
      // Validate min & max
      const val = Number(e.target.value);
      if (val < 0) {
        onChange('');
        return;
      }
      if (typeof min !== 'undefined' && val < Number(min)) {
        // Set to min
        onChange(new BigNumber(min).toFixed());
        return;
      }
      if (typeof max !== 'undefined' && val > Number(max)) {
        return;
      }
    }
    onChange(e.target.value);
  }

  const txtClass = disabled ? '' : isRequired ? 'text-danger' : 'text-textSecondary';
  return (
    <Form.Group className={className}>
      <InputGroup className={`${hasFocus ? 'focus' : ''} ${variant} ${isRequired ? 'required' : ''}`} onClick={ () => { const curr: any = ref.current as any; curr.focus() }} onFocus={ () => setHasFocus(true) } onBlur={ () => setHasFocus(false) }>
        {prependComponent ? (
          <InputGroup.Prepend>
            <InputGroup.Text className={ `bg-input ${txtClass} p-1 border-0` }>
              {prependComponent}
            </InputGroup.Text>
          </InputGroup.Prepend>
        ) : ''}
        <FormControl
          ref={ref}
          disabled={disabled}
          value={value as any}
          onChange={onSubmit}
          step={step}
          type={type}
          aria-label={aria}
          placeholder={props.placeholder}
          className={ `bg-input ${disabled ? '' : 'text-textPrimary'} border-0` }
          required={required}
        />
        {appendComponent ? (
          <InputGroup.Append>
            <InputGroup.Text className={ `bg-input ${txtClass} p-1` }>{appendComponent}</InputGroup.Text>
          </InputGroup.Append>
        ) : ''}
      </InputGroup>
      <Form.Text>{helperTxt ?? ''}</Form.Text>
    </Form.Group>
  );
}

export default InputField;