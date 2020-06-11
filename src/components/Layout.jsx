import React from 'react';
import PropTypes from 'prop-types';

import Go2Top from './Go2Top';
import GoBack from './GoBack';

import '../styles/layout.css';

const Layout = ({ children, hasBack }) => (
  <>
    <main>{children}</main>
    {hasBack && <GoBack />}
    <Go2Top />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hasBack: PropTypes.bool,
};

Layout.defaultProps = {
  hasBack: false,
};

export default Layout;
