import React from 'react';
import styled from 'styled-components';

const StyledConainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.0875rem 1.45rem;
`;

const Container = ({ children }) => <StyledConainer>{children}</StyledConainer>;

export default Container;
