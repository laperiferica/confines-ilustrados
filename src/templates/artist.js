import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SEO from '../components/SEO';
import Artwork from '../components/Artwork';
import Title from '../components/Title';
import Portrait from '../components/Portrait';

const StyledArtistPage = styled.article`
  text-align: justify;
  max-width: 900px;
  margin: 0 auto;
  h2 {
    text-align: center;
  }
  h4.gallery,
  h4.share {
    margin-top: 3rem;
  }
  .meta {
    text-align: center;
  }
`;

const ArtistPage = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
  pageContext,
}) => (
  <>
    <SEO title={frontmatter.name} lang={pageContext.language} />
    <StyledArtistPage>
      {frontmatter.image && (
        <Portrait
          image={{
            ...frontmatter.image.portrait.fixed,
            name: frontmatter.name,
          }}
        />
      )}
      <Title>{frontmatter.name}</Title>

      <div dangerouslySetInnerHTML={{ __html: html }} />

      {frontmatter.artwork &&
        frontmatter.artwork.map((x, idx) => (
          <Artwork key={idx} title={x.title} image={x.image.full.fluid} />
        ))}
    </StyledArtistPage>
  </>
);

ArtistPage.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func,
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        slug: PropTypes.slug,
        name: PropTypes.string,
        image: PropTypes.object,
        artwork: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            image: PropTypes.object,
          })
        ),
      }),
      html: PropTypes.string,
    }),
  }),
};

export default ArtistPage;

export const pageQuery = graphql`
  query($slug: String, $language: String) {
    markdownRemark(
      frontmatter: { slug: { eq: $slug }, lang: { eq: $language } }
      fileInfo: { sourceInstanceName: { eq: "artists" } }
    ) {
      frontmatter {
        slug
        name
        image {
          portrait: childImageSharp {
            fixed(quality: 95, width: 199, height: 199, fit: INSIDE) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
        artwork {
          title
          image {
            thumbnail: childImageSharp {
              fixed(quality: 95, width: 250, height: 250, fit: INSIDE) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
            full: childImageSharp {
              fluid(quality: 95) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      html
    }
  }
`;
