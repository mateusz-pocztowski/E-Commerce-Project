import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useSkeleton = () => {
  const [isSkeletonShown, setSkeletonShown] = useState(false);
  const loading = useSelector(({ isDataLoading }) => isDataLoading);

  useEffect(() => {
    const showSkeleton = () => {
      setSkeletonShown(true);
    };
    const hideSkeleton = () => {
      setSkeletonShown(false);
    };

    if (loading) showSkeleton();
    setTimeout(hideSkeleton, 1000);

    return () => clearTimeout(hideSkeleton);
  }, [loading]);

  return isSkeletonShown;
};

export default useSkeleton;
