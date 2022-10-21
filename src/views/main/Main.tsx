import { useEffect, useState } from "react";
import { bundleResource } from "../../api/services/resources";

import PageTemplate from "../../components/pageTemplate";

import BundleDescription, {
  TBundleDescription,
} from "./components/bundleDescription";

const Main = () => {
  const [bundleDescription, setBundleDescription] =
    useState<TBundleDescription>({
      title: null,
      description: null,
      label: null,
    });

  useEffect(() => {
    const getBundleDescriptionAsync = async () => {
      const bundleDescriptionResponse =
        await bundleResource.getBundleDescription();
      setBundleDescription(bundleDescriptionResponse);
    };

    getBundleDescriptionAsync();
  });

  return (
    <PageTemplate>
      <BundleDescription {...bundleDescription} />
    </PageTemplate>
  );
};

export default Main;
