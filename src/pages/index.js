import React from 'react';
import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Gallery from '../components/Gallery';
import Container from '../components/Container';
import Title from '../components/Title';

const IndexPage = ({
  data: {
    artists: { edges },
    text: { html },
  },
  intl,
}) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: 'Home' })} />

    <Container>
      <Title>Creatividad Confinada</Title>
      <p style={{ textAlign: 'justify' }}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </p>
    </Container>

    <Gallery
      columns={3}
      images={edges.map(({ node }) => ({
        ...node.frontmatter.featured.full.fluid,
        title: node.frontmatter.name,
        slug: node.frontmatter.slug,
      }))}
    />
  </Layout>
);

export default injectIntl(IndexPage);

export const pageQuery = graphql`
  query($language: String) {
    text: markdownRemark(
      frontmatter: { id: { eq: "home/intro" }, lang: { eq: $language } }
      fileInfo: { sourceInstanceName: { eq: "pages" } }
    ) {
      html
    }
    artists: allMarkdownRemark(
      filter: {
        fileInfo: { sourceInstanceName: { eq: "artists" } }
        frontmatter: { lang: { eq: $language } }
      }
      sort: { fields: frontmatter___name, order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            slug
            lang
            name
            featured {
              full: childImageSharp {
                fluid(quality: 95) {
                  aspectRatio
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
