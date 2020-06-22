import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  FaGlobe,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';

const StyledSocial = styled.div`
  ul {
    li {
      display: inline-block;
      margin-left: 1rem;
      a {
        color: black;
        font-size: 45px;
      }
    }
  }
`;

const Social = ({ website, facebook, instagram, youtube, twitter }) => (
  <StyledSocial>
    <ul>
      {website && (
        <li>
          <a href={website} target={'_blank'} rel={'noopener noreferrer'}>
            <FaGlobe />
          </a>
        </li>
      )}
      {facebook && (
        <li>
          <a href={facebook} target={'_blank'} rel={'noopener noreferrer'}>
            <FaFacebook />
          </a>
        </li>
      )}
      {instagram && (
        <li>
          <a href={instagram} target={'_blank'} rel={'noopener noreferrer'}>
            <FaInstagram />
          </a>
        </li>
      )}
      {youtube && (
        <li>
          <a href={youtube} target={'_blank'} rel={'noopener noreferrer'}>
            <FaYoutube />
          </a>
        </li>
      )}
      {twitter && (
        <li>
          <a href={twitter} target={'_blank'} rel={'noopener noreferrer'}>
            <FaTwitter />
          </a>
        </li>
      )}
    </ul>
  </StyledSocial>
);

export default Social;
