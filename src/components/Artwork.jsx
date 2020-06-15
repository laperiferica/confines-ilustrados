import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledArtwork = styled.div`
  cursor: pointer;
  .gatsby-image-wrapper {
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 1rem;
  }
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
`;

const Artwork = ({ item, onClick }) => (
  <StyledArtwork onClick={() => onClick()}>
    <Img fluid={item.image} />
    <div className={'title'}>{item.title}</div>
  </StyledArtwork>
);

Artwork.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
};

export default Artwork;
