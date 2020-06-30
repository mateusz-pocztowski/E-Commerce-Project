import { useState, useEffect } from 'react';

const useLoader = () => {
  const [isLoaderVisible, setLoaderVisibility] = useState(true);
  useEffect(() => {
    const toggleLoader = () => {
      setLoaderVisibility(false);
    };
    setTimeout(toggleLoader, 900);

    return () => clearTimeout(toggleLoader);
  }, []);

  return isLoaderVisible;
};

export default useLoader;
