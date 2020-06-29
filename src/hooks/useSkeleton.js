import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useSkeleton = () => {
  const [isSkeletonContent, setSkeletonContent] = useState(false);
  const loading = useSelector(({ isDataLoading }) => isDataLoading);

  useEffect(() => {
    const showSkeleton = () => {
      setSkeletonContent(true);
    };
    const hideSkeleton = () => {
      setSkeletonContent(false);
    };

    if (loading) showSkeleton();
    setTimeout(hideSkeleton, 1000);

    return () => clearTimeout(hideSkeleton);
  }, [loading]);

  return isSkeletonContent;
};

export default useSkeleton;
