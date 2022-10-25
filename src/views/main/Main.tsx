import PageTemplate from "../../components/pageTemplate";

import BundleDescription, {
  TBundleDescription,
} from "./components/bundleDescription";
import BundleItems from "./components/bundleItems";

import { ITEMS_COUNT } from "./consts";
import { useInfinityScrolling } from "./hooks";

type TMain = {
  bundleDescription: TBundleDescription;
  bundleItemsCount: number | null;
};

const Main = (props: TMain) => {
  const { bundleDescription, bundleItemsCount } = props;
  const { items, containerRef, isLoading } = useInfinityScrolling(
    ITEMS_COUNT,
    bundleItemsCount
  );

  return (
    <PageTemplate>
      <>
        <BundleDescription {...bundleDescription} />
        <BundleItems
          bundleItems={items}
          isLoading={isLoading}
          skeletonsItemsCount={ITEMS_COUNT}
        />
        <div ref={containerRef} />
      </>
    </PageTemplate>
  );
};

export default Main;
