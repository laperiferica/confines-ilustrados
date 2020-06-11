import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledPortrait = styled.div`
  text-align: center;
  .gatsby-image-wrapper {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 50%;
  }
`;

const Portrait = ({ image }) => (
  <StyledPortrait>
    <Img fixed={image} alt={image.name} />
  </StyledPortrait>
);

Portrait.propTypes = {
  image: PropTypes.object,
};

export default Portrait;
