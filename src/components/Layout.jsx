import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Go2Top from './Go2Top';
import GoBack from './GoBack';

import '../styles/layout.css';

const StyledLayout = styled.div`
  main {
    margin-bottom: 4rem;
  }
`;

const Layout = ({ children, pageContext }) => (
  <StyledLayout>
    <main>{children}</main>
    {pageContext.slug && <GoBack lang={pageContext.language} />}
    <Go2Top />
  </StyledLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
