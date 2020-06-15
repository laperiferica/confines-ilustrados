import React from 'react';
import PropTypes from 'prop-types';

import Go2Top from './Go2Top';
import GoBack from './GoBack';

import '../styles/layout.css';

const Layout = ({ children, pageContext }) => (
  <>
    <main>{children}</main>
    {pageContext.slug && <GoBack lang={pageContext.language} />}
    <Go2Top />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
