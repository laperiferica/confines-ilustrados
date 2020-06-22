import React from 'react';
import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';

import SEO from '../components/SEO';
import Gallery from '../components/Gallery';
import Title from '../components/Title';
import Composition from '../components/Composition';
import Sidebar from '../components/Sidebar';
import Item from '../components/Item';

import logo from '../images/logo.png';
import poster from '../images/cartel.jpg';

const IndexPage = ({
  data: {
    artists: { edges },
    text: { html },
  },
  intl,
  pageContext,
}) => (
  <>
    <SEO
      title={intl.formatMessage({ id: 'Home' })}
      lang={pageContext.language}
    />

    <Composition>
      <Sidebar>
        <img src={poster} />
        <div style={{ textAlign: 'justify' }}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Sidebar>

      <div>
        <Gallery
          partitions={2}
          component={Item}
          lang={pageContext.language}
          items={edges.map(({ node }) => ({
            image: node.frontmatter.featured.full.fluid,
            title: node.frontmatter.name,
            slug: node.frontmatter.slug,
          }))}
        />
      </div>
    </Composition>
  </>
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
