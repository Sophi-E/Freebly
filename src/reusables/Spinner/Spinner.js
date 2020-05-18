import React from 'react';
import { Spin } from 'antd';

const spinStyle = {
  textAlign: 'center',
  width: '90vh',
  borderRadius: '4px',
  marginBottom: '20px',
  padding: '30px 50px',
  margin: '20px 0',
};

const Spinner = () => {
  return (
    <div style={spinStyle}>
      <Spin />
      <p>Loading Posts...</p>
    </div>
  );
};

export default Spinner;
