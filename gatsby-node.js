const path = require('path');

// Added fileInfo to markdownRemark nodes
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type MarkdownRemark implements Node {
      fileInfo: File @link(from: "parent")
    }
  `);
};

// Create team pages
const createArtistPages = async (createPage, edges) => {
  const tmpl = path.resolve('src/templates/artist.js');
  edges.forEach(
    ({
      node: {
        frontmatter: { slug },
      },
    }) => {
      createPage({
        path: slug,
        component: tmpl,
        context: {
          slug,
        },
      });
    }
  );
};

// Create pages main process
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      artists: allMarkdownRemark(
        filter: { fileInfo: { sourceInstanceName: { eq: "artists" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  await createArtistPages(createPage, result.data.artists.edges);
};
