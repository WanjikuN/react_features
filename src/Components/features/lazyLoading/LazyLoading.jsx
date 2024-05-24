// Lazy loading allows you to split your code into smaller chunks
// Loads only the code that is needed for a particular part of your application
// When required
 
// dynamic import, suspense. React.lazy()
// lazy() is used to dynamically import components only when they’re needed.

// Suspense is a component provided by React that lets you “wait” for the dynamic import to load,
//  showing a fallback UI in the meantime
import React, { Suspense } from "react";

const LazyLoadedComponents = () => {
  const LazyLoadedItem = React.lazy(() => import("./LazyItem"));

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyLoadedItem />
    </Suspense>
  );
};

export default LazyLoadedComponents;