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
    border: 1px solid #093142;
  }
  &:focus {
    outline: none;
    border: 1px solid #093134;
  }
`;
interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  name: string;
  inputType: string;
  value: any;
}

const InputComponent: React.FC<InputProps> = ({
  name,
  label,
  error,
  placeholder,
  onChange,
  inputType,
  id,
  value,
}: InputProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Input
        value={value}
        type={inputType}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        id={id}
        required
        //style={error && { border: 'solid 1px red' }}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default InputComponent;
