import { render, screen } from "@testing-library/react";

import BundleItem from "../bundleItem/BundleItem";

import BundleItems from "./BundleItems";

jest.mock("../bundleItem/BundleItem", () => jest.fn(() => null));
jest.mock(
  "../bundleItemsSkeleton/BundleItemsSkeleton",
  () => (props: { count: number }) => <div>Skeleton {props.count}</div>
);

const bundleItemsMock = [
  {
    id: 1,
    title: "title",
    url: "url",
    label: "label",
    imageUrl: "image_url",
  },
  { id: 2, title: "title", url: "url", label: "label", imageUrl: "image_url" },
];

describe("BundleItems", () => {
  it("render BundleItems correctly", () => {
    render(
      <BundleItems
        isLoading={false}
        bundleItems={bundleItemsMock}
        skeletonsItemsCount={5}
      />
    );

    expect(BundleItem).toHaveBeenNthCalledWith(
      1,
      {
        title: "title",
        link: "url",
        label: "label",
        imageUrl: "image_url",
      },
      {}
    );
    expect(BundleItem).toHaveBeenNthCalledWith(
      2,
      {
        title: "title",
        link: "url",
        label: "label",
        imageUrl: "image_url",
      },
      {}
    );
  });

  it("renders skeleton if isLoading", () => {
    render(
      <BundleItems isLoading={true} bundleItems={[]} skeletonsItemsCount={5} />
    );

    expect(screen.getByText("Skeleton 2")).toBeInTheDocument();
  });
});
