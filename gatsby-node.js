const path = require('path');

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  
  createPage({
    path: `/`,
    component: path.resolve('./src/templates/dynamic-template.js'),
    context: {
      title: "Home Page",
      isIndex: true,
      pagePath: "/"
    },
  });
  
  createPage({
    path: `/example`,
    component: path.resolve('./src/templates/dynamic-template.js'),
    context: {
      title: "Example Page",
      isIndex: false,
      pagePath: "/example"
    },
  });
  
  createPage({
    path: `/404`,
    component: path.resolve('./src/templates/dynamic-template.js'),
    context: {
      title: "404 - Page Not Found",
      isIndex: false,
      is404: true,
      pagePath: "/404"
    },
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  
  console.log('Processing page:', page.path); 
  
  const newPage = {
    ...page,
    matchPath: `${page.path}/:slug`,
  };
    
    console.log('New matchPath:', newPage.matchPath);

    deletePage(page);
    createPage(newPage);
    
    console.log('Created page with matchPath for dynamic routing');

};