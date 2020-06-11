import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';

const StyledItem = styled.div`
  width: ${(props) => props.width}%;
  display: inline-block;
  margin-bottom: ${(props) => props.gap}rem;
  position: relative;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  .title {
    transition: all 0.5s;
    opacity: 0;
    display: grid;
    align-items: center;
    justify-items: center;
    background-color: rgba(66, 33, 99, 0.7);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 400;
    color: white;
    text-transform: lowercase;
  }

  &:hover .title {
    opacity: 1;
  }
`;

const Item = ({ width, image, gap }) => (
  <StyledItem width={width} gap={gap}>
    <Link to={`/${image.slug}`}>
      <Img fluid={image} />
      <div className={'title'}>{image.title}</div>
    </Link>
  </StyledItem>
);

Item.propTypes = {
  image: PropTypes.object,
  width: PropTypes.number,
  gap: PropTypes.number,
};

Item.defaultProps = {
  width: 100,
  gap: 1,
};

export default Item;
