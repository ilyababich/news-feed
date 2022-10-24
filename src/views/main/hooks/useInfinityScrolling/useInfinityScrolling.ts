import { useEffect, useRef, useState } from "react";

import { bundleResource } from "../../../../api/services/resources";
import { TBundleItem } from "../../../../types";

const options = {
  root: null,
  rootMargin: "200px",
  threshold: 1.0,
};

const useInfinityScrolling = (numberOfItems: number) => {
  const isUpdatedRef = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalNumberRef = useRef<number | null>(null);

  const [items, setItems] = useState<TBundleItem[]>([]);
  const [shouldLoadItems, setShouldLoadItems] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const callbackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;

    if (
      entry.isIntersecting &&
      totalNumberRef.current &&
      totalNumberRef.current > items.length
    ) {
      setShouldLoadItems(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    const container = containerRef.current;

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);

  useEffect(() => {
    const asyncRequest = async () => {
      const itemsLength = await bundleResource.getBundleItemsLength();

      totalNumberRef.current = itemsLength;
    };

    asyncRequest();
  }, []);

  useEffect(() => {
    const asyncRequest = async () => {
      setIsLoading(true);
      const requestedItems = await bundleResource.getBundleItemsRange(
        items.length,
        items.length + numberOfItems
      );
      setItems((currentItems) => currentItems.concat(requestedItems));
      setShouldLoadItems(false);
      setIsLoading(false);
    };

    if (!isUpdatedRef.current || shouldLoadItems) {
      asyncRequest();
    }

    isUpdatedRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldLoadItems]);

  return {
    containerRef,
    items,
    isLoading,
  };
};

export default useInfinityScrolling;
