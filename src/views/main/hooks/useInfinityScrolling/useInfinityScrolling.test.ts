import { renderHook, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import useInfinityScrolling from "./useInfinityScrolling";

jest.mock("../../../../api/services/resources/bundles/resource", () => {
  return {
    getBundleItemsRange: jest
      .fn()
      .mockResolvedValueOnce([1, 2])
      .mockResolvedValueOnce([3, 4]),
  };
});

describe("useInfinityScrolling", () => {
  beforeEach(() => {
    // @ts-ignore
    window.IntersectionObserver = jest.fn(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
    }));
  });
  it("return list of items and isLoading flag", async () => {
    const { result } = renderHook(() => useInfinityScrolling(2, 10));

    expect(result.current.isLoading).toBeTruthy();

    await waitFor(() => result.current.isLoading === false);

    await act(async () => {
      // @ts-ignore
      const [callback] = window.IntersectionObserver.mock.calls[0];

      await callback([{ isIntersecting: true }]);
    });

    expect(result.current.items).toEqual([1, 2]);
    expect(result.current.isLoading).toBeFalsy();

    await act(async () => {
      // @ts-ignore
      const [callback] = window.IntersectionObserver.mock.calls[0];

      await callback([{ isIntersecting: true }]);
    });

    expect(result.current.items).toEqual([1, 2, 3, 4]);
    expect(result.current.isLoading).toBeFalsy();
  });
});
