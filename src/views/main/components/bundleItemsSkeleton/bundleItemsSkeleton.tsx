import { useMemo } from "react";

import BundleItemSkeleton from "../bundleItemSkeleton";

type TBundleItemsSkeleton = {
  count: number;
};

const BundleItemsSkeleton = (props: TBundleItemsSkeleton) => {
  const { count } = props;

  const skeletonArray = useMemo(() => {
    const array = new Array(count).fill(null);

    return array.map((item, index) => <BundleItemSkeleton key={index} />);
  }, [count]);

  return <>{skeletonArray}</>;
};

export default BundleItemsSkeleton;
