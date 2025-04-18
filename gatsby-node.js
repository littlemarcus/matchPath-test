const path = require('path');
const pages = require('./src/data/pages');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  
  const pageTemplate = path.resolve('./src/templates/page-template.js');
  
  pages.forEach(page => {
    console.log(`Creating page from data source: ${page.path}`);
    
    createPage({
      path: page.path,
      component: pageTemplate,
      context: {
        id: page.id,
        title: page.title,
        content: page.content,
        pagePath: page.path
      },
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
    
  const newPage = {
      ...page,
      matchPath: `${page.path}/:slug`,
    };

    deletePage(page);
    createPage(newPage);
};
