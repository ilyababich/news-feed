import { useEffect, useState } from "react";
import { bundleResource } from "../../api/services/resources";

import PageTemplate from "../../components/pageTemplate";

import BundleDescription, {
  TBundleDescription,
} from "./components/bundleDescription";
import BundleItems from "./components/bundleItems";

import { useInfinityScrolling } from "./hooks";

const Main = () => {
  const [bundleDescription, setBundleDescription] =
    useState<TBundleDescription>({
      title: null,
      description: null,
      label: null,
    });

  const { items, containerRef, isLoading } = useInfinityScrolling(10);

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
        {isLoading && <div>IS LOADING...</div>}
        <div ref={containerRef} />
      </>
    </PageTemplate>
  );
};

export default Main;
