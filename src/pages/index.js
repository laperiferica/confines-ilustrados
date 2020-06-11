import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby-plugin-intl';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Gallery from '../components/Gallery';
import Container from '../components/Container';
import Title from '../components/Title';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Home" />

    <Container>
      <Title>Creatividad Confinada</Title>
      <p style={{ textAlign: 'justify' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum
        ullamcorper augue, vestibulum aliquam erat tincidunt non. Quisque tempor
        viverra nulla in sagittis. Quisque lectus magna, hendrerit euismod diam
        sit amet, accumsan vehicula arcu. Nunc imperdiet maximus nulla, eu
        posuere nibh. Duis ante ligula, pretium at nunc ac, ultrices rutrum
        eros. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Aliquam tempor, enim nec tristique
        luctus, ante nunc laoreet ipsum, ac accumsan tortor quam a leo.
        Phasellus felis velit, bibendum ac sapien nec, posuere fermentum lectus.
        Aliquam nec libero eu ligula sodales mattis.
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

export default IndexPage;

export const pageQuery = graphql`
  query($language: String) {
    allMarkdownRemark(
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
