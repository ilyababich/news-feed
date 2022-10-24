import { TBundleItem } from "../../../../types";
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
