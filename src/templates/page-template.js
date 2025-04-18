import React from 'react';
import { Link } from 'gatsby';

const PageTemplate = ({ pageContext, path, location, ...props }) => {
  // Safely extract the id, title, and content from the page context
  const id = pageContext?.id || '';
  const title = pageContext?.title || 'Page Title';
  const content = pageContext?.content || '';

  // Get the current path and extract any parameters
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : path || '';
  
  // Standardize path to handle trailing slash differences
  const normalizedPath = currentPath.endsWith('/') ? currentPath : `${currentPath}/`;
  const pathParts = normalizedPath.split('/').filter(Boolean);
  
  // Extract slug if present (anything after /example/)
  const slug = pathParts.length > 0 && pathParts[0] === 'example' && pathParts.length > 1 
    ? pathParts[1] 
    : null;
  
  // Check if this is the home page or 404 page
  const isHomePage = id === 'home';
  const is404Page = id === '404';

  return (
    <>
      {title}
      {content}
      
      {isHomePage && (
        <>
          
            Test Links:
            
              Example Base Route
              Example with Slug Parameter
              Example with Different Parameter
              About Page
              404 Test
            
          
          
          
            How This Works:
            Pages in this test are created from a data source.
            We then add matchPath to the example page to support dynamic parameters.
            The test is to see how file generation changes between Gatsby 5.11.0 and 5.12.0+.
          
        </>
      )}
      
      {id === 'example' && (
        <>
          Route Information:
          Current Path: {currentPath}
          Slug Parameter: {slug || 'No parameter'}
        </>
      )}
      
      {!isHomePage && !is404Page && (
        <Link to="/">Back to Home</Link>
      )}
    </>
  );
};

export default PageTemplate;