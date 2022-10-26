import { render } from "@testing-library/react";
import BundleItemSkeleton from "./BundleItemSkeleton";

describe("BundleItemSkeleton", () => {
  it("renders component correctly", () => {
    const { asFragment } = render(<BundleItemSkeleton />);

    expect(asFragment()).toMatchInlineSnapshot(`
      <DocumentFragment>
        <div
          class="layout"
        >
          <div
            class="image"
          />
          <div
            class="label"
          />
          <div
            class="label"
          />
        </div>
      </DocumentFragment>
    `);
  });
});
