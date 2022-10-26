import { TBundleItem } from "../../../../types";
import BundleItem from "../bundleItem";
import BundleItemsSkeleton from "../bundleItemsSkeleton";

import styles from "./BundleItems.module.css";

type TBundleItems = {
  bundleItems: TBundleItem[];
  isLoading: boolean;
  skeletonsItemsCount: number;
};

const BundleItems = (props: TBundleItems) => {
  const { bundleItems, isLoading, skeletonsItemsCount } = props;
  return (
    <div className={styles.layout} data-cy="bundle-items">
      {bundleItems.map((item) => {
        return (
          <BundleItem
            key={item.id}
            title={item.title}
            label={item.label}
            link={item.url}
            imageUrl={item.imageUrl}
          />
        );
      })}
      {isLoading && (
        <BundleItemsSkeleton count={Math.floor(skeletonsItemsCount / 2)} />
      )}
    </div>
  );
};

export default BundleItems;
