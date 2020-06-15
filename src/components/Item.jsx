import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

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

const Item = ({ width, item, gap, lang }) => (
  <StyledItem width={width} gap={gap}>
    <AniLink paintDrip hex={'#663399'} to={`/${lang}/${item.slug}`}>
      <Img fluid={item.image} />
      <div className={'title'}>{item.title}</div>
    </AniLink>
  </StyledItem>
);

Item.propTypes = {
  image: PropTypes.object,
  width: PropTypes.number,
  gap: PropTypes.number,
  lang: PropTypes.string,
};

Item.defaultProps = {
  width: 100,
  gap: 1,
  lang: 'en',
};

export default Item;
