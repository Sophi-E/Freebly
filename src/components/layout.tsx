import React from 'react';
import styled from '@emotion/styled';
import Navbar from './nav/Navbar';
import Footer from './Footer';

const StyledWrapper = styled.div`
  max-width: 80%;
  padding: 40px;
`;
const StyledContainer = styled.div`
  max-width: 80rem;
  margin: 3rem auto;
`;

const Layout = (children: any) => {
  return (
    <StyledWrapper>
      <Navbar />
      <StyledContainer>{children}</StyledContainer>
      <Footer />
    </StyledWrapper>
  );
};

export default Layout;
