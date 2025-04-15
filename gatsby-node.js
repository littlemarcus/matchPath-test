exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, deletePage } = actions;
  
    if (page.path === '/example/') {
      console.log('Processing example page to add matchPath with :slug');
      console.log('Original page path:', page.path);
      
      const newPage = {
        ...page,
        matchPath: `${page.path}:slug`,
      };
  
      console.log('New matchPath:', newPage.matchPath);
      
      deletePage(page);
      createPage(newPage);
    }
  };