import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledComposition = styled.div`
  display: grid;
  grid-template-columns: 39.2% 61.8%;
  @media only screen and (max-width: 980px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
const Composition = ({ children }) => (
  <StyledComposition>{children}</StyledComposition>
);

Composition.propTypes = {
  children: PropTypes.node,
};

export default Composition;
