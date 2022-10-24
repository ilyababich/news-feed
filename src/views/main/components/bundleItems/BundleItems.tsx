import { TBundleItem } from "../../../../types";
import BundleItem from "../bundleItem";

import styles from "./BundleItems.module.css";

type TBundleItems = {
  bundleItems: TBundleItem[];
};

const BundleItems = (props: TBundleItems) => {
  return (
    <div className={styles.layout}>
      {props.bundleItems.map((item) => {
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
    </div>
  );
};

export default BundleItems;
