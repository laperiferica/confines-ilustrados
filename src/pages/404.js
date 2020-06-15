import React from 'react';

import SEO from '../components/SEO';

const NotFoundPage = ({ pageContext }) => (
  <>
    <SEO title={'404'} lang={pageContext.language} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
);

export default NotFoundPage;
