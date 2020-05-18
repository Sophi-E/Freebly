import React from 'react';
import { Spin } from 'antd';

const spinStyle = {
  textAlign: 'center',
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: '4px',
  marginBottom: '20px',
  padding: '30px 50px',
  margin: '20px 0',
};

const Spinner = () => {
  return (
    <div style={spinStyle}>
      <Spin />
    </div>
  );
};

export default Spinner;
