import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const StyledGoBack = styled.div`
  a {
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
  }
`;

const Go2Top = ({ lang }) => (
  <StyledGoBack>
    <AniLink paintDrip hex={'#663399'} to={`/${lang}/`}>
      <FaArrowLeft size={'25px'} />
    </AniLink>
  </StyledGoBack>
);

Go2Top.propTypes = {
  lang: PropTypes.string,
};

Go2Top.defaultProps = {
  lang: 'en',
};

export default Go2Top;
