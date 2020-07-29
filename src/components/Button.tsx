import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  color: white;
  background: #1d3742;
  border: none;
  padding: 0.5em 1em;
  margin: 2px;
`;

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  textColor?: string;
  bgColor?: string;
  text?: string;
}
const Button: React.FC<IButton> = ({ textColor, bgColor, text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
