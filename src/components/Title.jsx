import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.div`
  margin-bottom: 2rem;
  h2 {
    font-size: 2rem;
    line-height: 2rem;
    color: black;
  }
`;

const Title = ({ children }) => (
  <StyledTitle>
    <h2>{children}</h2>
  </StyledTitle>
);

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
