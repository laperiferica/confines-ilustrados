import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  text-align: right;
  padding: 2rem 4rem;

  line-height: 1.2rem;
  @media only screen and (max-width: 980px) {
    & {
      padding: 1rem 2rem;
    }
  }
`;

const Sidebar = ({ children }) => <StyledSidebar>{children}</StyledSidebar>;

Sidebar.propTypes = {
  children: PropTypes.node,
};

export default Sidebar;
