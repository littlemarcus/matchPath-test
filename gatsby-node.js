const path = require('path');
const pages = require('./src/data/pages');

// Create pages from data source
exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  
  // Create a page for each item in our data source
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

// Add matchPath to pages that need dynamic routing
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  
  console.log('Processing page in onCreatePage:', page.path);
  
  // Add dynamic routing to the example page
  if (page.path === '/example/' || page.path === '/example') {
    console.log('Adding matchPath to data-sourced example page');
    
    // Delete the original page
    deletePage(page);
    
    // Create a new page with matchPath - matching client implementation
    const newPage = {
      ...page,
      matchPath: `${page.path === '/example' ? '/example/' : page.path}:slug`,
    };
    
    console.log('New matchPath:', newPage.matchPath);
    
    // Create the updated page with matchPath
    createPage(newPage);
    
    console.log('Created page with matchPath for dynamic routing');
  }
};