import React from 'react';
import { Link } from 'gatsby';

const DynamicTemplate = ({ pageContext, path, location, ...props }) => {
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : path;
  const pathParts = currentPath.split('/').filter(Boolean);
  
  const slug = pathParts.length > 1 && pathParts[0] === 'example' ? pathParts[1] : null;
  
  const isHomePage = pageContext.isIndex;
  
  return (
    <>
      {isHomePage ? (
        <>
          <h1>Gatsby Pure Template Test</h1>
          <p>Testing template-based dynamic routing with NO pages directory</p>
        </>
      ) : (
        <>
          {pageContext.title}
          <p>This page is created via the createPages API in gatsby-node.js</p>
          
          <p>Route Information:</p>
          <p>Current Path: {currentPath}</p>
          <p>Slug Parameter: {slug || 'No parameter'}</p>
          
          <Link to="/">Back to Home</Link>
          
        </>
      )}
    </>
  );
};

export default DynamicTemplate;