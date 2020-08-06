import React from 'react';
import styled from '@emotion/styled';

const FullWidthContainer = styled.div`
  width: 100%;
`;

const FullWidth = (props: any) => {
  return <FullWidthContainer>{props.children}</FullWidthContainer>;
};

export default FullWidth;
