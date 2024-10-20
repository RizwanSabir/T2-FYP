import React, { useEffect, useState } from 'react';

const MyComponent = ({children}) => {
  const [dynamicHeight, setDynamicHeight] = useState('h-fit');

  useEffect(() => {
    const handleResize = () => {
      const contentHeight = document.getElementById('content').offsetHeight;
      const viewportHeight = window.innerHeight;

      if (contentHeight < viewportHeight) {
        setDynamicHeight('h-screen');
      } else {
        setDynamicHeight('h-fit');
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div  id="content">
      {children}
    </div>
  );
};

export default MyComponent;
