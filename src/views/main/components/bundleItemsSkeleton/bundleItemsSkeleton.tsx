import { useMemo } from "react";

import BundleItemSkeleton from "../bundleItemSkeleton";

import styles from "./bundleItemsSkeleton.module.css";

type TBundleItemsSkeleton = {
  count: number;
};

const BundleItemsSkeleton = (props: TBundleItemsSkeleton) => {
  const { count } = props;

  const skeletonArray = useMemo(() => {
    const array = new Array(count).fill(null);

    return array.map((item, index) => <BundleItemSkeleton key={index} />);
  }, [count]);

  return <div className={styles.layout}>{skeletonArray}</div>;
};

export default BundleItemsSkeleton;
