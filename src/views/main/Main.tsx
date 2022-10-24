import { useEffect, useState } from "react";
import { bundleResource } from "../../api/services/resources";

import PageTemplate from "../../components/pageTemplate";
import { TBundleItem } from "../../types";

import BundleDescription, {
  TBundleDescription,
} from "./components/bundleDescription";
import BundleItems from "./components/bundleItems";

const Main = () => {
  const [bundleDescription, setBundleDescription] =
    useState<TBundleDescription>({
      title: null,
      description: null,
      label: null,
    });

  const [bundleItems, setBundleItems] = useState<TBundleItem[]>([]);

  useEffect(() => {
    const getBundleDescriptionAsync = async () => {
      const bundleDescriptionResponse =
        await bundleResource.getBundleDescription();
      setBundleDescription(bundleDescriptionResponse);

      const bundleItemsResponse = await bundleResource.getBundleItemsRange(
        0,
        10
      );

      setBundleItems(bundleItemsResponse);
    };

    getBundleDescriptionAsync();
  });

  return (
    <PageTemplate>
      <>
        <BundleDescription {...bundleDescription} />
        <BundleItems bundleItems={bundleItems} />
      </>
    </PageTemplate>
  );
};

export default Main;
