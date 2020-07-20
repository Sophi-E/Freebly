import React from 'react';
import { Spin } from 'antd';
import styled from '@emotion/styled';

const SpinnerDiv = styled.div`
  text-align: center;
  // width: 90vh;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
`;

const Spinner = () => {
  return (
    <SpinnerDiv>
      <Spin />
      <p>Loading Posts...</p>
    </SpinnerDiv>
  );
};

export default Spinner;
