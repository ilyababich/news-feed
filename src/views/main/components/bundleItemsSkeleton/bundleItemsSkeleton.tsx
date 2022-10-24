import { useMemo } from "react";

import BundleItemSkeleton from "../bundleItemSkeleton";

import styles from "./bundleItemsSkeleton.module.css";

type TBundleItemsSkeleton = {
  count: number;
};

const BundleItemsSkeleton = (props: TBundleItemsSkeleton) => {
  const { count } = props;

  const skeletonArray = useMemo(() => {
    const array = new Array(count);

    return array.fill(<BundleItemSkeleton />);
  }, [count]);

  return <div className={styles.layout}>{skeletonArray}</div>;
};

export default BundleItemsSkeleton;
