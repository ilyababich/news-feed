import { useEffect, useState } from "react";

import { bundleResource } from "../../api/services/resources";
import { TBundleDescription } from "./components/bundleDescription";
import Main from "./Main";

const MainPage = () => {
  const [bundleDescription, setBundleDescription] =
    useState<TBundleDescription>({
      title: null,
      description: null,
      label: null,
    });

  const [totalItemsCount, setTotalItemsCount] = useState<number | null>(null);

  useEffect(() => {
    const getBundleDescriptionAsync = async () => {
      try {
        const result = await Promise.all([
          bundleResource.getBundleDescription(),
          bundleResource.getBundleItemsLength(),
        ]);

        setBundleDescription(result[0]);
        setTotalItemsCount(result[1]);
      } catch (err) {
        setTotalItemsCount(0);
      }
    };

    getBundleDescriptionAsync();
  }, []);

  return (
    <Main
      bundleItemsCount={totalItemsCount}
      bundleDescription={bundleDescription}
    />
  );
};

export default MainPage;
