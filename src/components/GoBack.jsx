import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from 'react-icons/fa';
import { navigate } from 'gatsby-plugin-intl';

const StyledGoBack = styled.a`
  position: fixed;
  bottom: 16px;
  left: 16px;
  cursor: pointer;
  width: 60px;
  height: 60px;
  font-size: 16px;
  z-index: 1100;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: #663399;
  color: white;
`;

const Go2Top = () => (
  <StyledGoBack tabIndex={0} onClick={() => navigate('/')}>
    <FaChevronLeft size={'25px'} />
  </StyledGoBack>
);

export default Go2Top;
