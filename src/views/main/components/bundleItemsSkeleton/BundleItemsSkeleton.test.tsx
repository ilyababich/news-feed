import { render, screen } from "@testing-library/react";

import BundleItemsSkeleton from "./BundleItemsSkeleton";

jest.mock("../bundleItemSkeleton/BundleItemSkeleton", () => () => (
  <div>Skeleton</div>
));

describe("BundleItemsSkeleton", () => {
  it("render component correctly", () => {
    render(<BundleItemsSkeleton count={6} />);

    expect(screen.getAllByText("Skeleton").length).toEqual(6);
  });
});
