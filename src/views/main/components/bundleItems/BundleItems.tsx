import { TBundleItem } from "../../../../api/services/resources/bundles/types";

import BundleItem from "../bundleItem";

type TBundleItems = {
  bundleItems: TBundleItem[];
};

const BundleItems = (props: TBundleItems) => {
  return (
    <div>
      {props.bundleItems.map((item) => {
        return (
          <BundleItem
            key={item.id}
            title={item.titel}
            label={item.labelValue}
            link={item.urlAlias}
            imageUrl=""
          />
        );
      })}
    </div>
  );
};

export default BundleItems;
