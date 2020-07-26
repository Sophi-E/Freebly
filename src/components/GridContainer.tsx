import React from 'react';
import styled from '@emotion/styled';

const StyledFlex = styled.div`
  display: grid;
  grid-template-rows: 1fr;

  /* justify-items: space-between; */

  @media screen and (min-width: 664px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 866px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1366px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  /* @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  } */
`;
const GridContainer = (props: any) => {
  return <StyledFlex>{props.children}</StyledFlex>;
};

export default GridContainer;
