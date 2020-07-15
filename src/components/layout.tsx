import React from 'react';
import styled from '@emotion/styled';
import Navbar from './nav/Navbar';
import Footer from './Footer';

const StyledWrapper = styled.div`
  width: 100%;
`;
const StyledContainer = styled.div`
  max-width: 80%;
  margin: 3rem auto;
`;

const Layout = (props: any) => {
  return (
    <StyledWrapper>
      <Navbar />
      <StyledContainer>{props.children}</StyledContainer>
      <Footer />
    </StyledWrapper>
  );
};

export default Layout;
