import { useEffect, useState } from "react";
import { bundleResource } from "../../api/services/resources";

import PageTemplate from "../../components/pageTemplate";

import BundleDescription, {
  TBundleDescription,
} from "./components/bundleDescription";
import BundleItems from "./components/bundleItems";
import BundleItemsSkeleton from "./components/bundleItemsSkeleton";

import { ITEMS_COUNT } from "./consts";
import { useInfinityScrolling } from "./hooks";

const Main = () => {
  const [bundleDescription, setBundleDescription] =
    useState<TBundleDescription>({
      title: null,
      description: null,
      label: null,
    });

  const { items, containerRef, isLoading } = useInfinityScrolling(ITEMS_COUNT);

  useEffect(() => {
    const getBundleDescriptionAsync = async () => {
      const bundleDescriptionResponse =
        await bundleResource.getBundleDescription();
      setBundleDescription(bundleDescriptionResponse);
    };

    getBundleDescriptionAsync();
  }, []);

  return (
    <PageTemplate>
      <>
        <BundleDescription {...bundleDescription} />
        <BundleItems bundleItems={items} />
        {isLoading && <BundleItemsSkeleton count={ITEMS_COUNT} />}
        <div ref={containerRef} />
      </>
    </PageTemplate>
  );
};

export default Main;
