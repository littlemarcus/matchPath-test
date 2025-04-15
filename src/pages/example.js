import React from 'react';
import { Link } from 'gatsby';

const ExamplePage = (props) => {
  // Get slug from URL params
  const slug = props?.params?.slug || 'No slug parameter';
  
  return (
    <>
      <h1>Example</h1>
      <p>Slug parameter: {slug}</p>
      <p>Props: {JSON.stringify(props, null, 2)}</p>
      <Link to="/">Back to Home</Link>
    </>
  );
};

export default ExamplePage;