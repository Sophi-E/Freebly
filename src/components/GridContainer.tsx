import React from 'react';
import styled from '@emotion/styled';

const StyledFlex = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  justify-items: center;
  @media screen and (min-width: 760px) {
    /* display: grid; */

    grid-template-columns: repeat(4, 1fr);
  }
`;
const GridContainer = (props: any) => {
  return <StyledFlex>{props.children}</StyledFlex>;
};

export default GridContainer;
