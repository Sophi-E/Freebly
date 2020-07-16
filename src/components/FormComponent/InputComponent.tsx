import React from 'react';
import styled from '@emotion/styled';

const Input = styled('input')`
  width: 100%;
  padding: 8px;
  margin: 10px 0;
  background-color: #eee;
  border: none;
  border-radius: 5px;
  &:hover {
    border: 1px solid blueviolet;
  }
`;
type InputProps = {
  name: string;
  placeholder: string;
  label?: string;
  onChange?: any;
  value?: any;
  error?: string;
  type: any;
};

const InputComponent: React.FC<InputProps> = ({
  name,
  placeholder,
  label,
  onChange,
  value,
  error,
  type,
}: InputProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Input
        type={type}
        required
        // size='1em'
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        //  style={error && { border: 'solid 1px red' }}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default InputComponent;
